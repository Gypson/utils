export default convertVersionToNumber = version => {
  // Split a given version string into three parts.
  let parts = version.split(".");
  // Check if we got exactly three parts, otherwise throw an error.
  if (parts.length !== 3) {
    throw new Error("Received invalid version string");
  }

  let number = parts
    .map((group, index) => {
      const count = 3 - group.length;
      const zero = "0";
      return zero.repeat(count) + group;
    })
    .join("");

  return parseInt(number, 10);
};
