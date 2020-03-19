export default removeFocusOnMouseUp = event => {
  const { currentTarget, target } = event;
  window.setTimeout(() => (currentTarget || target).blur(), 0);
};
