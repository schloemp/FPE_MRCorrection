sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("Test.controller.Correction", {
		PEStepContainer: undefined,
		onInit: function() {
			if (sap.ushell && sap.ushell.services.ProcessEngine) {
				var lPE = sap.ushell.Container.getService("ProcessEngine");
				this.PEStepContainer = lPE.getCurrentStepContainer();
				this.PEStepContainer.MROrderOldValue = 10342;
				this.PEStepContainer.MROrderNewValue = 10342;
				var lModel = new JSONModel(this.PEStepContainer);
				this.getView().setModel(lModel, "data");
			}
		},
		onSubmit: function() {
		    var lPE = sap.ushell.Container.getService("ProcessEngine");
		    lPE.executeNext();
		}
	});
});