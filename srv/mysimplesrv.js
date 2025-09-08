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

    srv.on("READ", "StudentService",(req,res)=>{
      const {SELECT} = cds.ql;
      // const result = cds.run(SELECT.from(Students));
       const result = cds.run(req.query);
      console.log("get data");
      return result;
    })
}

module.exports = mysrvdemo


/*module.exports =(srv) =>{
    
}*/


