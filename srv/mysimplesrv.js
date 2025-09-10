//const mysrvdemo = function(srv){

const { error } = require("@sap/cds");
const cds = require ("@sap/cds");
const { trace } = require("@sap/cds/lib/srv/middlewares");
const { response } = require("express");
const {Students} = cds.entities("InsightHub.hrMs");


const mysrvdemo = (srv)=>{

    srv.on("myfoobar",function(req,res){
        return "Hello World" + " " + req.data.firstName + req.data.lastName;
    })

      srv.on("myfoobar2",function(req,res){
        return "Welcome";
    })

    srv.on("READ", "GetStudent",(req,res)=>{
      //const {SELECT} = cds.ql;
      // const result = cds.run(SELECT.from(Students));
      //const aFilter = req.query.SELECT.where;
       const result = cds.run(req.query);
      console.log("get data");
      return result;
    });

    srv.on("CREATE","UpdateStudent", async(req,res)=>{

      let name = req.data.firstName;
      let emailID = req.data.email;
      // Transaction utilizing the handler "req" object
      const transaction = cds.transaction(req);
      const{UPDATE, SELECT} = cds.ql;
      const updatedRows = await transaction.run(
          UPDATE(Students)
          .set({ firstName: name }).where({email:emailID})
        )
        if(updatedRows === 0){
          req.error(error, "Error updating rows");
        }

        const response = await transaction.run(
          SELECT.one.from(Students).where({email:emailID})
        )

      // creating a new transaction object i.e., not utilizing the "req" from API call

      // const result = cds.transaction(async txn => {
      //   const{UPDATE, SELECT} = cds.ql;
      //   const updatedRows = await txn.run(
      //     UPDATE(Students)
      //     .set({ firstName: name }).where({email:emailID})
      //   )
      //   if(updatedRows === 0){
      //     req.error(error, "Error updating rows");
      //   }

      //   const response = await txn.run(
      //     SELECT.one.from(Students).where({email:emailID})
      //   )
      //   return response;
      // });


      // Update without using transaction 
      // let result = await UPDATE(Students).set({
      //   firstName: name
      // })
      // .where({
      //   email:emailID
      // });

      return response;
    }),

    srv.on("CREATE","CreateStudent", async(req,res)=>{
      const result = cds.transaction(async txn =>{
        const{INSERT,SELECT} = cds.ql;
         const InsertedRows = await txn.run(
        INSERT.into(Students).entries(req.data)
        )

        if (InsertedRows ===0){
          req.error(error,"Error Inserting Student")
        }

        const response = await txn.run(
          SELECT.from(Students).where({email:req.data.email})
        )
        return response;
      })
      return result;
      
    })


    srv.on("deleteStudent", async (req, res) => {
      const txn = cds.transaction(req);
      const {DELETE} = cds.ql;
      const deletedRows = await txn.run(
        DELETE.from(Students).where({email:req.data.email})
      )
      if(deletedRows > 0){
        return true;
      }
      return false;

    })
    
}
module.exports = mysrvdemo


/*module.exports =(srv) =>{
    
}*/

// Create a Student and fetch


