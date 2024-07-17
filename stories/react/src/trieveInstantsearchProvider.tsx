import React, { useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch';
import TrieveInstasearchAdapter from '../../../src/TrieveInstantsearchAdapter';

const API_KEY = import.meta.env.VITE_TRIEVE_API_KEY;
const DATASET = import.meta.env.VITE_TRIEVE_DATASET;

const INDEX_NAME = 'companies';

interface IndexProps {
  /**
   * Component to be renderer.
   */
  children: React.ReactNode;
}

export default function TrieveInstantsearchProvider({
  children,
}: Readonly<IndexProps>) {
  const searchClient = useMemo(() => {
    const trieveInstasearchAdapter = new TrieveInstasearchAdapter({
      server: {
        apiKey: API_KEY,
        dataset: DATASET,
        url: 'https://api.trieve.ai',
      },
      searchType: 'fulltext',
    });

    return trieveInstasearchAdapter.searchClient;
  }, []);

  return (
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
      {children}
    </InstantSearch>
  );
}
