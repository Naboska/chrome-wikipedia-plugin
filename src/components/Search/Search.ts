import { wikiSearchService } from 'services';

import './style.css';
import { SearchContent, SearchItem, SearchValue } from './units';

type TSearch = {
  findValue: string;
};

export const Search = ({ findValue }: TSearch) => {
  const fragment = document.createDocumentFragment();
  const content = SearchContent();

  const findContent = () => {
    content.innerText = 'find...';
    const list = document.createElement('ol');
    list.className = 'chrome-wikipedia-plugin-search_list';

    wikiSearchService(findValue)
      .then(result => {
        result.forEach(wiki => list.appendChild(SearchItem(wiki)));
        content.innerHTML = '';
        content.appendChild(list);
      })
      .catch(() => (content.innerText = 'error...'));
  };

  return () => {
    findContent();

    fragment.appendChild(SearchValue(findValue));
    fragment.appendChild(content);

    return fragment;
  };
};
