export const SearchValue = (value: string) => {
  const searchWrapper = document.createElement('div');
  const searchText = document.createElement('h1');

  searchText.innerText = value;

  searchWrapper.appendChild(searchText);

  return searchWrapper;
};
