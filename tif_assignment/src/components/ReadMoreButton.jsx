import { Box } from "@chakra-ui/react";

const ReadMoreButton = () => {
  return (
    <Box
      w="120px"
      h="30px"
      as="button"
      p="12px, 30px, 12px, 30px"
      borderRadius="30px"
      color="#424961"
      bg="white"
      gap="6px"
      border="2px solid #0e2368"
      _hover={{ bg: "#E23744", color: "white" }}
      _active={{ bg: "#E23744", color: "white" }}
    >
      Read More
    </Box>
  );
};

export default ReadMoreButton;
