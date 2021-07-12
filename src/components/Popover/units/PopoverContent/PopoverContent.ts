import { createPopper } from '@popperjs/core';

type TPopoverContent = {
  element: HTMLElement;
  children: HTMLElement;
};

export const PopoverContent = ({ element, children }: TPopoverContent) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'chrome-wikipedia-plugin-popover_content';

  createPopper(element, wrapper, { placement: 'bottom' });

  wrapper.appendChild(children);

  return wrapper;
};
