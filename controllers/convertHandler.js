function ConvertHandler() {
    this.getNum = function (input) {
        const regex = /[a-z]/i;
        const numRegex =
            /^[0-9]+(?:\.{1}[0-9]+)?(?:\/{1}[0-9]+(?:\.{1}[0-9]+)?)?$/;
        const index = input.search(regex);
        let result = "1";

        if (index === 0) {
            return result;
        }

        const num = input.slice(0, index);
        result = numRegex.test(num) ? num : "invalid number";

        if (result.includes("/")) {
            const toEval = result.split("/");
            result = String(toEval[0] / toEval[1]);
        }

        return result;
    };

    this.getUnit = function (input) {
        const regex = /[a-z]+/i;
        let result = regex.exec(input)[0];
        result === "l" || result === "L"
            ? (result = "L")
            : (result = result.toLowerCase());
        return result;
    };

    this.getReturnUnit = function (initUnit) {
        const dataStore = {
            gal: "L",
            lbs: "kg",
            mi: "km",
            L: "gal",
            kg: "lbs",
            km: "mi",
        };
        const result = dataStore[initUnit] || "invalid unit";
        return result;
    };

    this.spellOutUnit = function (unit) {
        const unitsSpelledOut = {
            gal: "gallons",
            lbs: "pounds",
            mi: "miles",
            L: "liters",
            kg: "kilograms",
            km: "kilometers",
        };
        const result = unitsSpelledOut[unit];
        return result;
    };

    this.convert = function (initNum, initUnit) {
        try {
            const convertTable = {
                gal: (input) => input * 3.78541,
                lbs: (input) => input * 0.453592,
                mi: (input) => input * 1.60934,
                L: (input) => input / 3.78541,
                kg: (input) => input / 0.453592,
                km: (input) => input / 1.60934,
            };
            const result = convertTable[initUnit](initNum);
            return result.toFixed(5);
        } catch (err) {
            console.log(err.message);
        }
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        const result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
        return result;
    };
}

module.exports = ConvertHandler;
