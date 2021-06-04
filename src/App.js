import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  MenuItem,
  MenuButton,
  Menu,
  Flex,
  Button,
  MenuList,
} from '@chakra-ui/react';
import { FaHamburger } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ImageGallery from './ImageGallery';
import './style.css';
function App() {
  const [type, setType] = useState('safeimages');
  const handleClick = e => {
    setType(e.target.textContent.toLowerCase().replace(/\s/g, ''));
  };
  return (
    <ChakraProvider theme={theme}>
      <Flex display="flex" direction="column">
        <Flex display="flex" justify="space-between" fontFamily="cursive">
          <Box fontSize="2xl" p="1rem" flex={1}>
            ANIME-GALLERY
          </Box>
          <Box padding="1rem">
            <Menu>
              <MenuButton as={Button}>
                <FaHamburger />
              </MenuButton>
              <MenuList rootProps={{ style: { right: 0 } }}>
                <ColorModeSwitcher />
                <MenuItem
                  color="green.300"
                  className="110"
                  onClick={handleClick}
                >
                  Safe Images
                </MenuItem>
                <MenuItem
                  color="yellow.300"
                  className="010"
                  onClick={handleClick}
                >
                  Sketchy Images
                </MenuItem>
                <MenuItem color="red.300" className="001" onClick={handleClick}>
                  NSFW Images
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <ImageGallery type={type} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
