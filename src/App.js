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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHamburger, FaImages } from 'react-icons/fa';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ImageGallery from './ImageGallery';
import Notice from './Notice';
function App() {
  const [type, setType] = useState('safeimages');
  const handleClick = e => {
    setType(e.target.textContent.toLowerCase().replace(/\s/g, ''));
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex display="flex" direction="column">
        <Flex
          pos="fixed"
          width="full"
          shadow="lg"
          display="flex"
          justify="space-between"
          fontFamily="cursive"
          zIndex="toast"
          // color={useColorModeValue('#020030', '#fff')}
        >
          <Box fontSize="lg" p="1rem" flex={1} fontWeight="bold">
            ANIME-GALLERY
          </Box>
          <Notice />
          <Box padding="1rem">
            <Menu>
              <MenuButton as={Button}>
                <FaHamburger />
              </MenuButton>
              <MenuList rootProps={{ style: { right: 0 } }}>
                <ColorModeSwitcher />
                <MenuItem
                  mt={1}
                  mb={1}
                  icon={<FaImages />}
                  textAlign="center"
                  _hover={{
                    bgColor: `${useColorModeValue('green.50', 'green.50')}`,
                    color: `green.500`,
                  }}
                  fontWeight="bold"
                  color="green.500"
                  border="2px"
                  // borderColor="green.500"
                  className="110"
                  onClick={handleClick}
                  borderRadius="lg"
                >
                  Safe Images
                </MenuItem>
                <MenuItem
                  mt={1}
                  textAlign="center"
                  mb={1}
                  _hover={{
                    bgColor: `${useColorModeValue('yellow.50', 'yellow.50')}`,
                    color: `yellow.500`,
                  }}
                  icon={<FaImages />}
                  color="yellow.500"
                  className="010"
                  border="2px"
                  // borderColor="yellow.500"
                  fontWeight="bold"
                  onClick={handleClick}
                  borderRadius="lg"
                >
                  Sketchy Images
                </MenuItem>
                <MenuItem
                  textAlign="center"
                  mt={1}
                  mb={1}
                  _hover={{
                    bgColor: `${useColorModeValue('red.50', 'red.50')}`,
                    color: `red.500`,
                  }}
                  fontWeight="bold"
                  icon={<FaImages />}
                  color="red.500"
                  border="2px"
                  borderRadius="lg"
                  // borderColor="yellow.500"
                  className="001"
                  onClick={handleClick}
                >
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
