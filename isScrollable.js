class ScrollCheck {
  constructor(node) {
    this.node = node;
    this.computedStyle = window.getComputedStyle(node);
  }

  hasOverflow(dimension) {
    const overflow = this.computedStyle[`overflow${dimension.toUpperCase()}`];
    return overflow === "scroll" || overflow === "auto";
  }

  isScrollableX() {
    return (
      this.hasOverflow("x") && this.node.scrollWidth > this.node.clientWidth
    );
  }

  isScrollableY() {
    return (
      this.hasOverflow("y") && this.node.scrollHeight > this.node.clientHeight
    );
  }

  isScrollable() {
    return this.isScrollableX() || this.isScrollableY();
  }
}

export default isScrollable = node => {
  return new ScrollCheck(node).isScrollable();
};

export const scrollingParent = node => {
  const output = [];
  let el = node;

  while (el && el !== document.documentElement) {
    if (isScrollable(el)) {
      output.push(el);
    }

    el = el.parentNode;
  }

  if (node.ownerDocument && node.ownerDocument.defaultView) {
    output.push(node.ownerDocument.defaultView);
  }

  return output;
};
