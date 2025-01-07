/* eslint-disable react/react-in-jsx-scope */
import { use, useState } from 'react';

const promiseCache = new Map();

function getFetchPromise(url: string) {
  if (!promiseCache.has(url)) {
    const fetchPromise = fetch(url).then((res) => res.json());
    promiseCache.set(url, fetchPromise);
  }
  return promiseCache.get(url);
}
export default function Pokemon() {
  const [url, setUrl] = useState('');

  const pokemon = url ? use(getFetchPromise(url)) : null;
  const togglePokemon = () => {
    if (url) {
      setUrl('');
    } else {
      setUrl('https://pokeapi.co/api/v2/pokemon/1');
    }
  };

  return (
    <>
      <button onClick={togglePokemon} id='fetch-pokemon'>
        {url ? 'Clear Pokemon' : 'Fetch Pokemon'}
      </button>
      {url && pokemon ? (
        <>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            <code>{JSON.stringify(pokemon, null, 1)}</code>
          </pre>
        </>
      ) : null}
    </>
  );
}
