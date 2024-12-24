sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("creatingoknavigating.controller.View1", {
        onInit() {
        },
        onView2:function(){
           var oRouter=this.getOwnerComponent().getRouter();
           oRouter.navTo("RouteView2");
        }
    });
});