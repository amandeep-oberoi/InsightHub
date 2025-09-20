sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
     "shopverse/utility/formatter"
], (Controller,JSONModel,Formatter) => {
    "use strict";

    return Controller.extend("shopverse.controller.Orders", {
         formatter: Formatter,
        onInit() {

        }

    });
});