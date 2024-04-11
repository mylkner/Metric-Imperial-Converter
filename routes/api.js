"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
    let convertHandler = new ConvertHandler();

    app.get("/api/convert", (req, res) => {
        const input = req.query.input;

        const num = convertHandler.getNum(input);
        const unit = convertHandler.getUnit(input);

        if (num === "invalid number" && unit === "invalid unit") {
            res.json("invalid number and unit");
            return;
        } else if (num === "invalid number") {
            res.json("invalid number");
            return;
        } else if (unit === "invalid unit") {
            res.json("invalid unit");
            return;
        }

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

        res.json({
            initNum: Number(num),
            initUnit: unit,
            returnNum: Number(returnNum),
            returnUnit: returnUnit,
            string: string,
        });
    });
};
