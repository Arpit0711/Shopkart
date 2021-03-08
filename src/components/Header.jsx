import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png"
            alt=""
          />
          <h4>Top Offers</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png"
            alt=""
          />
          <h4>Grocery</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://i.insider.com/5f89a711d260780019341ca3?width=700"
            alt=""
          />
          <h4>Mobiles</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png"
            alt=""
          />
          <h4>Fashion</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png"
            alt=""
          />
          <h4>Electronics</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100"
            alt=""
          />
          <h4>Home</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png"
            alt=""
          />
          <h4>Appliances</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png"
            alt=""
          />
          <h4>Travel</h4>
        </HeaderItems>
        <HeaderItems>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png"
            alt=""
          />
          <h4>Beauty, Toys and more</h4>
        </HeaderItems>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff;
  margin-top: 0.5rem;
`;

const HeaderItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 4rem;
  }
  h4 {
    color: purple;
    font-weight: 900;
  }
`;
