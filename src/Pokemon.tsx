// @ts-nocheck

'use server';
import React from 'react';
import { Suspense, useState, use } from 'react';

export default function Pokemon() {
  //   const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(
  //     (res) => res.json()
  //   );

  //   const pokemon = use(fetchPromise);

  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await res.json();
    setPokemon(data);
  };

  const clearPokemon = () => {
    setPokemon(null);
  };

  return (
    <>
      <button onClick={fetchPokemon} id='fetch-pokemon'>
        Fetch Pokemon
      </button>
      <button onClick={clearPokemon} id='clear-pokemon'>
        Clear Pokemon
      </button>
      {pokemon ? (
        <Suspense fallback={<p>Please wait</p>}>
          <>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              <code>{JSON.stringify(pokemon, null, 1)}</code>
            </pre>
          </>
        </Suspense>
      ) : null}
    </>
  );
}
