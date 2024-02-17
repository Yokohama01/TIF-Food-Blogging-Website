import { Box, Image } from "@chakra-ui/react";
import Button from "./Button";
import "../Css/Top-Img.css";

function Top_Img() {
  return (
    <>
      <div className="topSection">
        <div className="explore-div">
          <img src="logo.png" alt="#" />
          <div className="explore-title">
            <h1>
              Discover the <br />
              <span>Best</span> Food <br />
              and Drinks
            </h1>
          </div>
          <p className="explore-description">
            Naturally made Healthcare Products for the <br />
            better care & support of your body.
          </p>
          <Button
            title="Explore Now!"
            width="190px"
            height="63px"
            wm="120px"
            hm="40px"
          />
        </div>
        <div className="imageSection">
          <Box position="relative" w="100%" h="100%">
            <Image
              src="main_headlight _img.png"
              alt="Background"
              w="100%"
              h="100%"
            />

            <Box position="absolute" top="0" left="0" w="100%" h="100%">
              <Image src="Vector 1.png" alt="Overlay" w="100%" h="100%" />
              <a href="#" className="get-in-touch-link">
                Get in touch
              </a>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Top_Img;
