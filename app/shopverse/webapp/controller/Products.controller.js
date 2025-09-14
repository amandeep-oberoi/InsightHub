sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "shopverse/utility/formatter"
], (Controller,JSONModel,Formatter) => {
    "use strict";

    return Controller.extend("shopverse.controller.Products", {
        formatter: Formatter,
        onInit() {	},
       onCategoryPress: function (oEvent) {

        let sPath = oEvent.getSource().getBindingContext("NorthwindModel").getPath();
        let oModel = this.getView().getModel("NorthwindModel");
        let sCategoryID = oModel.getProperty(sPath).CategoryID;
        
        let oBinding = this.getView().byId("ProductsList").getBinding("items");
        var oFilter = new sap.ui.model.Filter("CategoryID","EQ",sCategoryID);
        oBinding.filter(oFilter);
       }
    
    });
});