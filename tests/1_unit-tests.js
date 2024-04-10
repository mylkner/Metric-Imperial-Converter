const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
    test("convertHandler correctly reads whole number input", function () {
        assert.strictEqual(
            convertHandler.getNum("2kg"),
            "2",
            "Correctly reads whole number input"
        );
    });
    test("convertHandler correctly reads decimal number input", function () {
        assert.strictEqual(
            convertHandler.getNum("2.5kg"),
            "2.5",
            "Correctly reads decimal number input"
        );
    });
    test("convertHandler correctly reads fractional number input", function () {
        assert.strictEqual(
            convertHandler.getNum("5/2kg"),
            "2.5",
            "Correctly reads fractional number input"
        );
    });
    test("convertHandler correctly reads fractional number with decimal input", function () {
        assert.strictEqual(
            convertHandler.getNum("5.2/2kg"),
            "2.6",
            "Correctly reads fractional number with decimal input"
        );
    });
    test("convertHandler returns error on double fraction", function () {
        assert.strictEqual(
            convertHandler.getNum("5/2/2kg"),
            "invalid number",
            "Returns error on double fraction"
        );
    });
    test("convertHandler defaults to a number value of 1", function () {
        assert.strictEqual(
            convertHandler.getNum("kg"),
            "1",
            "Defaults to a number value of 1"
        );
    });
    test("convertHandler correctly reads each valid input unit.", function () {
        assert.strictEqual(
            convertHandler.getUnit("kg"),
            "kg",
            "Correctly reads each valid input unit"
        );
    });
    test("convertHandler correctly returns error for invalid unit.", function () {
        assert.strictEqual(
            convertHandler.getReturnUnit("27invalid_unit"),
            "invalid unit",
            "Correctly returns error for invalid unit"
        );
    });
    test("convertHandler correctly returns the correct return unit for each valid input unit.", function () {
        assert.strictEqual(
            convertHandler.getReturnUnit("kg"),
            "lbs",
            "Correctly returns the correct return unit for each valid input unit"
        );
    });
    test("convertHandler correctly returns the spelled-out string unit for each valid input unit.", function () {
        assert.strictEqual(
            convertHandler.spellOutUnit("kg"),
            "kilograms",
            "Correctly returns the spelled-out string unit for each valid input unit"
        );
    });
    test("convertHandler correctly correctly converts gal to L.", function () {
        assert.strictEqual(
            convertHandler.convert("5", "gal"),
            "18.92705",
            "Correctly converts gal to L"
        );
    });
    test("convertHandler correctly correctly converts L to gal.", function () {
        assert.strictEqual(
            convertHandler.convert("5", "L"),
            "1.32086",
            "Correctly converts L to gal"
        );
    });
    test("convertHandler correctly correctly converts mi to km.", function () {
        assert.strictEqual(
            convertHandler.convert("5", "mi"),
            "8.04670",
            "Correctly converts mi to km"
        );
    });
    test("convertHandler correctly correctly converts km to mi.", function () {
        assert.strictEqual(
            convertHandler.convert("5", "km"),
            "3.10686",
            "Correctly converts km to mi"
        );
    });
    test("convertHandler correctly correctly converts lbs to kg.", function () {
        assert.strictEqual(
            convertHandler.convert("5", "lbs"),
            "2.26796",
            "Correctly converts lbs to kg"
        );
    });
    test("convertHandler correctly correctly converts kg to lbs.", function () {
        assert.strictEqual(
            convertHandler.convert("5", "kg"),
            "11.02312",
            "Correctly converts kg to lbs"
        );
    });
});
