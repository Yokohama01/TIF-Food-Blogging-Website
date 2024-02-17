import { Box } from "@chakra-ui/react";

const Button = ({ title }) => {
  return (
    <Box
      w="120px"
      h="40px"
      as="button"
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
