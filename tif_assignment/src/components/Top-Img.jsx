import { Box, Image } from "@chakra-ui/react";

function Top_Img() {
  return (
    <>
      <Box position="relative" w="375px" h="413px">
        <Image
          src="../../public/img/main_headlight _img.png"
          alt="Background"
          w="100%"
          h="100%"
        />

        <Box position="absolute" top="0" left="0" w="100%" h="100%">
          <Image
            src="../../public/img/Vector 1.png"
            alt="Overlay"
            w="100%"
            h="100%"
          />
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
              border: "2px solid white",
              padding: "6px",
              borderRadius: "30px",
              position: "absolute",
              top: "18px",
              right: "10px",
              zIndex: "2",
              w: "100px",
              h: "35px",
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Get in touch
          </a>
        </Box>
      </Box>
    </>
  );
}

export default Top_Img;
