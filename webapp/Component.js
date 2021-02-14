sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"./model/models"
], function(UIComponent, Device, JSONModel, models) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.basicTemplate.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// create the views based on the url/hash
			this.getRouter().initialize();

			//init model
			var oModel = new JSONModel({
				firstName: "Harry",
				lastName: "Hawk",
				enabled: true,
				panelHeaderText: "Data Binding Basics"
	
			});
			// Assign the model object to the SAPUI5 core
			// sap.ui.getCore().setModel(oModel);
			this.setModel(oModel);
		}
	});
});