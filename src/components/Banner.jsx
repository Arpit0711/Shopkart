import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function Banner() {
  return (
    <BannerContainer>
      <img
        src="https://i.pinimg.com/originals/a2/d2/89/a2d289475a7a6a6f7a3a745cbcc5a5d8.jpg"
        alt=""
      />
      <ArrowBackIosIcon />
      {/* <RightIcon>
        <ChevronRightIcon className="right_icon" />
      </RightIcon> */}
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  img {
    position: relative;
    height: 35vh;
    width: 100vw;
    object-fit: cover;
  }
  .MuiSvgIcon-root {
    position: absolute;
    left: 1%;
    top: 37%;
    z-index: 999;
    background-color: #ffffff;
    height: 5rem;
    width: 2rem;
    padding: 0.1rem;
  }
`;

const RightIcon = styled.div`
  .MuiSvgIcon-root {
    right: 90%;
  }
`;
