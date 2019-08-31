import React, { useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const LazyImage = ({ src, alt }) => {
  const [GifImage, setImage] = useState(null);
  useEffect(() => {
    setImage(null);
    const preImage = new Image();
    preImage.src = src;
    preImage.onload = () => {
      setImage(src);
    };
    return () => {
      preImage.onload = () => {};
    };
  }, [src]);

  if (!GifImage)
    return <ClimbingBoxLoader size={15} sizeUnit={'px'} color={'white'} />;

  return <img src={src} alt={alt} />;
};

export default LazyImage;
