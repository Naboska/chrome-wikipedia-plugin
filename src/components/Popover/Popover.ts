import './style.css';
import { PopoverContent, PopoverIcon } from './units';

type TPopover = {
  clientRects: DOMRect;
  children: () => HTMLElement | DocumentFragment;
};

const stopPropagation = (event: MouseEvent) => event.stopPropagation();

export const Popover = ({ clientRects, children }: TPopover) => {
  const icon = PopoverIcon({ clientRects });
  let content = null;

  const onPopover = () => {
    icon.style.visibility = 'hidden';

    content = PopoverContent({ element: icon, children: children() });
    content.addEventListener('mouseup', stopPropagation);

    document.body.appendChild(content);
    document.addEventListener('mousedown', clickOutside);
  };

  const clickOutside = ({ target }: globalThis.MouseEvent | TouchEvent) => {
    const includeTarget = content.contains(target as Node);

    if (!includeTarget) remove();
  };

  icon.addEventListener('click', onPopover);
  icon.addEventListener('mouseup', stopPropagation);

  const remove = () => {
    icon.removeEventListener('click', stopPropagation);
    icon.removeEventListener('click', onPopover);
    icon.remove();

    if (content) {
      content.removeEventListener('click', stopPropagation);
      content.removeEventListener('click', clickOutside);
      content.remove();
    }
  };

  return {
    rootNode: icon,
    remove,
  };
};
