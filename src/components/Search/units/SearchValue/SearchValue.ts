export const SearchValue = (value: string) => {
  const searchWrapper = document.createElement('div');
  const searchText = document.createElement('h2');

  searchText.className = 'chrome-wikipedia-plugin-search_title';
  searchText.innerText = value;

  searchWrapper.appendChild(searchText);

  return searchWrapper;
};
