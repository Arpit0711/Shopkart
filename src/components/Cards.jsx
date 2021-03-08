import styled from "styled-components";
import React from "react";

function Cards() {
  return (
    <CardContainer>
      <Card>
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k3erngw0/inflatable-sofa/8/e/g/pvc-airsofa-cum-indoor-outdoor-bed-006-pvc-3-seater-inflatable-original-imafgnbmmz8tzep6.jpeg?q=70"
          alt=""
        />

        <h2>DIAL FOR STYLE DREAM Airsofa PVC 3 Seater inflatable so...</h2>
        <p>Color-BLACK</p>
        <BadgeLine>
          <Badge>
            <p>3.6</p>
          </Badge>
          <p>(1,168)</p>
          <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="" />
        </BadgeLine>
        <PriceContainer>
          <p>
            <h3>Rs 2,999</h3>
            <h4>Rs6,874</h4> <span>56% off</span>
          </p>
        </PriceContainer>
        <h5>No Cost EMI</h5>
      </Card>
      <Card>
        <img
          src="https://rukminim1.flixcart.com/image/612/612/kdt50nk0/inflatable-sofa/7/z/c/vinyl-n-bw-75054-62002-nhr-original-imafum7fgc5dhtha.jpeg?q=70"
          alt=""
        />

        <h2>DIAL FOR STYLE DREAM Airsofa PVC 3 Seater inflatable so...</h2>
        <p>Color-BLACK</p>
        <BadgeLine>
          <Badge>
            <p>3.6</p>
          </Badge>
          <p>(1,168)</p>
          <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="" />
        </BadgeLine>
        <PriceContainer>
          <p>
            <h3>Rs 2,999</h3>
            <h4>Rs6,874</h4> <span>56% off</span>
          </p>
        </PriceContainer>
        <h5>No Cost EMI</h5>
      </Card>
      <Card>
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k3erngw0/inflatable-sofa/8/e/g/pvc-airsofa-cum-indoor-outdoor-bed-006-pvc-3-seater-inflatable-original-imafgnbmmz8tzep6.jpeg?q=70"
          alt=""
        />

        <h2>DIAL FOR STYLE DREAM Airsofa PVC 3 Seater inflatable so...</h2>
        <p>Color-BLACK</p>
        <BadgeLine>
          <Badge>
            <p>3.6</p>
          </Badge>
          <p>(1,168)</p>
          <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="" />
        </BadgeLine>
        <PriceContainer>
          <p>
            <h3>Rs 2,999</h3>
            <h4>Rs6,874</h4> <span>56% off</span>
          </p>
        </PriceContainer>
        <h5>No Cost EMI</h5>
      </Card>
      <Card>
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k3erngw0/inflatable-sofa/8/e/g/pvc-airsofa-cum-indoor-outdoor-bed-006-pvc-3-seater-inflatable-original-imafgnbmmz8tzep6.jpeg?q=70"
          alt=""
        />

        <h2>DIAL FOR STYLE DREAM Airsofa PVC 3 Seater inflatable so...</h2>
        <p>Color-BLACK</p>
        <BadgeLine>
          <Badge>
            <p>3.6</p>
          </Badge>
          <p>(1,168)</p>
          <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="" />
        </BadgeLine>
        <PriceContainer>
          <p>
            <h3>Rs 2,999</h3>
            <h4>Rs6,874</h4> <span>56% off</span>
          </p>
        </PriceContainer>
        <h5>No Cost EMI</h5>
      </Card>
    </CardContainer>
  );
}

export default Cards;

const CardContainer = styled.div`
  background-color: rgb(255, 255, 255);
  margin-left: 0.3rem;
  display: flex;
`;
const Card = styled.div`
  cursor: pointer;
  margin-left: 0.3rem;
  margin-right: 1rem;
  width: 18vw;
  &:hover {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
  img {
    height: 15rem;
    margin-top: 0.3rem;
    padding: 0.3rem;
    object-fit: contain;
  }
  h2 {
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 0.2rem;
    &:hover {
      font-weight: 900;
    }
  }
  p {
    font-size: 0.7rem;
    color: #878787;
    margin-left: 0.2rem;
    margin-top: 0.3rem;
  }
  h5 {
    margin-left: 0.3rem;
    margin-top: 0.3rem;
  }
`;
const BadgeLine = styled.div`
  display: flex;
  margin-top: 0.3rem;
  img {
    height: 1.4rem !important;
    margin-left: 0.5rem;
    padding: 0rem !important;
  }
`;
const Badge = styled.div`
  p {
    display: flex;
    margin-right: 0.5rem;
  }
`;
const PriceContainer = styled.div`
  p {
    display: flex;
  }
  h4 {
    margin-left: 1rem;
  }
  span {
    margin-left: 1rem;
  }
`;
