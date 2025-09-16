sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("shopverse.controller.Home", {
        onInit() {
        },
displayContent(oEvent){
          let oRoute;
          if(!oEvent){
            oRoute = 'Dashboard';
          }else{
            oRoute = oEvent.getParameter("item").getKey();
          }
          this.getOwnerComponent().getRouter().navTo(oRoute);
        }
        	

    });
});