//const mysrvdemo = function(srv){

const cds = require ("@sap/cds");
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

      let result = await UPDATE(Students).set({
        firstName: name
      })
      .where({
        email:emailID
      })
      return req.data;
    })
}

module.exports = mysrvdemo


/*module.exports =(srv) =>{
    
}*/


