export const setStyle = (node: HTMLElement, style: Partial<CSSStyleDeclaration>) => {
  Object.keys(style).forEach(key => {
    node.style[key] = style[key];
  });
};
