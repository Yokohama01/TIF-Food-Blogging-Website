import { Box } from "@chakra-ui/react";

const Button = ({ title, width, height }) => {
  return (
    <Box
      w={width}
      h={height}
      as="button"
      fontSize="20px"
      p="12px, 30px, 12px, 30px"
      borderRadius="30px"
      color="white"
      bg="#E23744"
      gap="6px"
      _hover={{ bg: "blue.600" }}
      _active={{ bg: "blue.700" }}
    >
      {title}
    </Box>
  );
};

export default Button;
