import React from 'react';
import { Hits, SearchBox } from 'react-instantsearch';

const Playground = () => {
  return (
    <div
      style={{
        marginTop: 24,
        borderTop: '1px solid #f2f2f2',
        paddingTop: 8,
      }}
    >
      <h1 style={{ marginBottom: 8, color: 'gray' }}>Playground</h1>
      <SearchBox />
      <div style={{ marginTop: 8 }}>
        <Hits />
      </div>
    </div>
  );
};

export default Playground;
