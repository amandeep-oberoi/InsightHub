sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("shopverse.controller.Home", {
        onInit() {
            let aCategories =[
                {
                key: "Products",
                value: "Products"
                },
                  {
                key: "Categories",
                value: "Categories"
                },
                  {
                key: "Customers",
                value: "Customers"
                },
                  {
                key: "Orders",
                value: "Orders"
                },
                 {
                key: "Suppliers",
                value: "Suppliers"
                }
        ]

    var oCategoriesModel = new JSONModel(aCategories);
		this.getView().setModel(oCategoriesModel,"categoryModel");
        }

        	

    });
});