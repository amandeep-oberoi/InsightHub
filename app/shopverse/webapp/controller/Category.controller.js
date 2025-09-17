sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
     "shopverse/utility/formatter"
], (Controller,JSONModel,Formatter) => {
    "use strict";

    return Controller.extend("shopverse.controller.Category", {
         formatter: Formatter,
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