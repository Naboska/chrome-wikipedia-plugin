const URL = 'https://ru.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*';

type TWikiResponse = [string, string[], string[], string[]];

export type TWikiService = {
  text: string;
  url: string;
};

export const wikiSearchService = (query: string): Promise<TWikiService[]> =>
  fetch(`${URL}&search=${query}`)
    .then(res => res.json())
    .then(([, result, , urls]: TWikiResponse) =>
      result.map((text, index) => ({ text, url: urls[index] }))
    );
