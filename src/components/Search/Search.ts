import './style.css';
import { SearchContent, SearchValue } from './units';

type TSearch = {
  findValue: string;
};

export const Search = ({ findValue }: TSearch) => {
  const wrapper = document.createElement('div');
  const content = SearchContent();

  const findContent = () => {
    content.innerText = 'find...';
  };

  return () => {
    findContent();

    wrapper.appendChild(SearchValue(findValue));
    wrapper.appendChild(content);

    return wrapper;
  };
};
