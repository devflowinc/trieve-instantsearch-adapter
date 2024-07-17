## Example react-instantsearch

```ts
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

const trieveInstantsearchAdapter = new TrieveInstantsearchAdapter({
  server: {
    apiKey: "tr-xxxxxxxxxxx",
    url: "https://api.trieve.ai",
  },
  searchType: "fulltext",
});

const searchClient = trieveInstantsearchAdapter.searchClient;

function App() {
  return (
    <InstantSearch
      indexName="076e26b3-13df-4920-811b-3d0caa0d3a1e"
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}

export default App;
```
