jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Shelf in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"shelfmaster/ui/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"shelfmaster/ui/test/integration/pages/App",
	"shelfmaster/ui/test/integration/pages/Browser",
	"shelfmaster/ui/test/integration/pages/Master",
	"shelfmaster/ui/test/integration/pages/Detail",
	"shelfmaster/ui/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "shelfmaster.ui.view."
	});

	sap.ui.require([
		"shelfmaster/ui/test/integration/MasterJourney",
		"shelfmaster/ui/test/integration/NavigationJourney",
		"shelfmaster/ui/test/integration/NotFoundJourney",
		"shelfmaster/ui/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});