sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Test.controller.Correction", {
		onNext: function() {
		    var lPE = sap.ushell.Container.getService("ProcessEngine");
		    lPE.executeNext();
		}
	});
});