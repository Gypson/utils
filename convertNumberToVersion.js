export default convertNumberToVersion = number => {
  const minor = number % 1000;
  const major = (number / 1000) % 1000;
  const release = (number / 1000000) % 1000;

  return `${parseInt(release, 10)}.${parseInt(major, 10)}.${parseInt(
    minor,
    10
  )}`;
};
