function toNumber(value: string | number) {
  if (typeof value === "string") {
    return Number(value);
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error("Invalid value");
  }
}

console.log(toNumber("10"));
