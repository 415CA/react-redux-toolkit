import React, { useState } from 'react';
import useFetchData from './index';

const Test = () => {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, hasError }, setUrl] = useFetchData(
    `http://hn.algolia.com/api/v1/search?query=redux`,
    query,
  );

  return (
    <>
      <form
        onSubmit={(event) => {
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);

          event.preventDefault();
        }}
      >
        <input type='text' value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type='submit'>Search</button>
      </form>

      {hasError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data &&
            data.hits.map((item) => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Test;
