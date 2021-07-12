import { setStyle } from 'lib';

type TPopoverIcon = {
  clientRects: DOMRect;
};

const OFFSET_TOP = 20;

export const PopoverIcon = ({ clientRects }: TPopoverIcon) => {
  const icon = document.createElement('div');
  icon.className = 'chrome-wikipedia-plugin-popover_icon';

  const style = {
    top: `${clientRects.top + document.scrollingElement.scrollTop + OFFSET_TOP}px`,
    left: `${clientRects.left}px`,
  };

  setStyle(icon, style);

  return icon;
};
