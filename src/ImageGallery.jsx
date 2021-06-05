import {
  Box,
  Container,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import URI from './api';
import axios from 'axios';
import { Image } from '@chakra-ui/image';
const ImageGallery = ({ type }) => {
  const [Images, setImages] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getImages = async () => {
      const response = await axios.get(`${URI}${type}`).catch(error => {
        setErr(true);
      });
      setLoading(false);
      setImages(response.data);
    };
    getImages();
    console.log(type);
    console.log(`getting image of ${type}`);
  }, [type, setImages, setErr, setLoading]);

  return (
    <Container mt={'6rem'} mb={'4rem'} maxW={'7xl'} className="gallery-body">
      {loading ? (
        <Box>Loading Images...</Box>
      ) : err ? (
        <Box>There is some error </Box>
      ) : (
        <SimpleGrid spacing={4} minChildWidth="320px">
          {Images.map((image, index) => {
            return (
              <Box key={index}>
                <LinkBox>
                  <LinkOverlay
                    href={image.path}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image src={image.thumbs.large} alt={image.category} />
                  </LinkOverlay>
                </LinkBox>
              </Box>
            );
          })}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default ImageGallery;
