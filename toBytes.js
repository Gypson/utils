const sizes = {
  b: 1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30
};
export default toBytes = value => {
  const bytes = Math.abs(value);
  let unit = "b";

  if (bytes >= sizes.gb) {
    unit = "gb";
  } else if (bytes >= sizes.mb) {
    unit = "mb";
  } else if (bytes >= sizes.kb) {
    unit = "kb";
  }

  return (
    (bytes / sizes[unit]).toFixed(2).replace(".00", "") +
    " " +
    unit.toUpperCase()
  );
};
