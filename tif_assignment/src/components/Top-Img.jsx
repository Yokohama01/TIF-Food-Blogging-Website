import { Box, Image } from "@chakra-ui/react";

function Top_Img() {
  return (
    <>
      <Box position="relative" width="375px" height="413px">
        <Image
          src="../../public/img/main_headlight _img.png"
          alt="Background"
          width="100%"
          height="100%"
        />

        <Box position="absolute" top="0" left="0" width="100%" height="100%">
          <Image
            src="../../public/img/Vector 1.png"
            alt="Overlay"
            width="100%"
            height="100%"
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
              width: "100px",
              height: "35px",
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
