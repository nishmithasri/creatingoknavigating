sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("creatingoknavigating.controller.View2", {
        onInit() {
        },
        onView1: function(){
            var oRouter= this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1");
        }
    });
});
