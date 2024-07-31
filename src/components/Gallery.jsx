import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('/v2/list');
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <div className='heading'><h1>Gallery</h1></div>
      <div className='imagecontainr'>
        {images.map((image) => (
          <img key={image.id} src={image.download_url} alt={image.author} className='image' />
        ))}
      </div>
      <button onClick={getImages} className='button'>Images</button>
    </div>
  );
};

export default Gallery;