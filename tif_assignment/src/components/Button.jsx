import { Box } from "@chakra-ui/react";

const Button = ({ title, width, height, wm, hm }) => {
  return (
    <Box
      width={{ lg: width, sm: wm }}
      height={{ lg: height, sm: hm }}
      as="button"
      p="10px"
      borderRadius="30px"
      color="white"
      bg="#E23744"
      gap="6px"
      _hover={{ bg: "blue.600" }}
      _active={{ bg: "blue.700" }}
    >
      <span className="bt-title">{title}</span>
    </Box>
  );
};

export default Button;
