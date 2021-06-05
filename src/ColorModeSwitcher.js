import React from 'react';
import { useColorMode, useColorModeValue, MenuItem } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <MenuItem
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      mt={1}
      mb={1}
      textAlign="center"
      _hover={{
        bgColor: `${useColorModeValue('', '')}`,
        color: ``,
      }}
      fontWeight="bold"
      borderRadius="lg"
      border="2px"
      borderColor="current"
      {...props}
    >
      {text.toUpperCase()} Mode
    </MenuItem>
  );
};
