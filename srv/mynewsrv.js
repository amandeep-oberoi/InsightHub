const { error } = require("@sap/cds");
const cds = require ("@sap/cds");
const { trace } = require("@sap/cds/lib/srv/middlewares");
const { response } = require("express");
const {Students} = cds.entities("InsightHub.hrMs");

const mysrvdemo = (srv) =>{

    srv.before("CREATE","UpdateStudent", async(req,res)=>{
        console.log("validations")
        return req.error(500,"Pasting error");

    })
}

module.exports = mysrvdemo;