jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"shelfmaster/ui/test/integration/NavigationJourneyPhone",
		"shelfmaster/ui/test/integration/NotFoundJourneyPhone",
		"shelfmaster/ui/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});