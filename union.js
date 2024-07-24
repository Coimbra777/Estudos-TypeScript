"use strict";
function toNumber(value) {
    if (typeof value === "string") {
        return Number(value);
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        throw "Invalid value";
    }
}
console.log(toNumber(""));
