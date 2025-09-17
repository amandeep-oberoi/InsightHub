sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("shopverse.controller.Home", {
        onInit() {
            let aCategories =[
              {
                key: "Dashboard",
                value: "Dashboard"
                },
                {
                key: "Products",
                value: "Products"
                },
                  {
                key: "Category",
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
                },
                 {
                key: "Timeline",
                value: "Timeline"
                }
        ]

    var oCategoriesModel = new JSONModel(aCategories);
		this.getView().setModel(oCategoriesModel,"categoryModel");
    this.displayContent(null);
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