import { Popover, Search } from 'components';

export const SearchWidget = () => {
  let popover = null;

  const finder = () => {
    const selection = window.getSelection();
    const findValue = selection.toString().trim();

    if (popover?.remove) popover.remove();

    if (findValue.length) {
      const range = selection.getRangeAt(0);
      const [clientRects] = range.getClientRects();

      popover = Popover({ clientRects, children: Search({ findValue }) });

      document.body.appendChild(popover.rootNode);
    }
  };

  window.addEventListener('mouseup', finder);
};
