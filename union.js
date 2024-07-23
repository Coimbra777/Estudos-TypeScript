"use strict";
function toNumber(value) {
    if (typeof value === "string") {
        return Number(value);
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        throw new Error("Invalid value");
    }
}
console.log(toNumber("10"));
