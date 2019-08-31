import { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { giphyApiKey } from '../config.json';

export function useSearchInputFetch(setFunction) {
  const searchRef = useRef();
  useEffect(() => {
    const searchChangeE = fromEvent(searchRef.current, 'keyup')
      .pipe(
        map(e => {
          return e.target.value;
        })
      )
      .pipe(debounceTime(1000));
    const sub = searchChangeE.subscribe(value => {
      const q = encodeURIComponent(value);
      fetchGifs(q).then(res => {
        setFunction(res.data);
      });
    });
    return () => {
      sub.unsubscribe();
    };
  }, [setFunction]);
  return [searchRef];
}

function fetchGifs(q) {
  const url = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${giphyApiKey}&limit=${21}`;
  return fetch(url)
    .then(res => res.json())
    .catch(err => {});
}
