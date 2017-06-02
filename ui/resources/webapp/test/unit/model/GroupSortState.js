sap.ui.define([
		"shelfmaster/ui/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Width").length, 1, "The sorting by Width returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Shelf_description").length, 1, "The sorting by Shelf_description returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Width").length, 1, "The group by Width returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Width if the user groupes by Width", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Width");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Width", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Shelf_description and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Width");

		this.oGroupSortState.sort("Shelf_description");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});