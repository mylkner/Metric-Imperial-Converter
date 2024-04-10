"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
    let convertHandler = new ConvertHandler();

    app.get("/api/convert", (req, res) => {
        const input = req.query.input;

        const num = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);
        const unitSpelledOut = convertHandler.spellOutUnit(unit);
        const returnUnit = convertHandler.getReturnUnit(unit);
        const returnUnitSpelledOut = convertHandler.spellOutUnit(returnUnit);
        const returnNum = convertHandler.convert(num, unit);
        const string = convertHandler.getString(
            num,
            unitSpelledOut,
            returnNum,
            returnUnitSpelledOut
        );

        if (num === "invalid number" && returnUnit === "invalid unit") {
            res.json("invalid number and unit");
        } else if (num === "invalid number") {
            res.json("invalid number");
        } else if (returnUnit === "invalid unit") {
            res.json("invalid unit");
        } else {
            res.json({
                initNum: Number(num),
                initUnit: unit,
                returnNum: Number(returnNum),
                returnUnit: returnUnit,
                string: string,
            });
        }
    });
};
