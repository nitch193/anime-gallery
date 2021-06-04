import { Container } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import URI from './api';
import axios from 'axios';
const ImageGallery = ({ type }) => {
  const [Images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(`${URI}${type}`);
      setImages(response.data);
      console.log(response.data);
    };
    getImages();
    console.log(type);
    console.log(`getting image of ${type}`);
  }, [type, setImages]);

  return (
    <Container maxW={'7xl'} className="gallery-body">
      <div className="image-list">
        {Images.map((image, index) => {
          return (
            <div key={index}>
              <a href={image.path} rel="noreferrer" target="_blank">
                <img src={image.thumbs.large} alt={image.category} />
              </a>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ImageGallery;
