import React from 'react';
import LazyImage from './LazyImage';

function GifContainer({ gif }) {
  return (
    <div className={'gif-image'}>
      <LazyImage src={gif.images.original.url} alt={gif.slug} />
    </div>
  );
}

export default GifContainer;
