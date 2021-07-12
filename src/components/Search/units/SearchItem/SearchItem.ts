import type { TWikiService } from 'services';

export const SearchItem = ({ text, url }: TWikiService, index: number) => {
  const item = document.createElement('li');
  item.className = 'chrome-wikipedia-plugin-search_link';

  const link = document.createElement('a');
  link.target = '__blank';
  link.href = url;
  link.innerText = `${index + 1}) ${text}`;

  item.appendChild(link);

  return item;
};
