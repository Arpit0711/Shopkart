import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useState } from "react";

function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <SidebarContainer>
        <Filter>
          <h1>Filters</h1>
        </Filter>
        <hr />
        <CategoriesContainer onClick={handleClick}>
          <h2>CATEGORIES</h2>
          <ExpandMoreIcon />
        </CategoriesContainer>
        {click && (
          <Categories>
            <h3>Furniture</h3>
            <h3>Sofas</h3>
          </Categories>
        )}

        <hr />
        <PriceContainer>
          <h2>PRICE</h2>
          <input type="range" min="1" max="100" value="50" />
          <select>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2500">2500</option>
            <option value="Min" selected>
              Min
            </option>
          </select>
          <select>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2500">2500</option>
            <option value="2500+" selected>
              2500+
            </option>
          </select>
        </PriceContainer>
        <hr />
        <AssuredContainer>
          <input type="checkbox" />
          <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="" />
          <HelpOutlineIcon />
        </AssuredContainer>
        <hr />
        <BrandContainer onClick={handleClick}>
          <h2>Brand</h2>
          <ExpandMoreIcon />
        </BrandContainer>
        <hr />
        <RatingsContainer onClick={handleClick}>
          <h2>CUSTOMER RATINGS</h2>
          <ExpandMoreIcon />
          {/* <ExpandLessIcon /> */}
        </RatingsContainer>
        {click && (
          <>
            {" "}
            <Ratings>
              <input type="checkbox" />
              <p>4* & above</p>
            </Ratings>
            <Ratings>
              <input type="checkbox" />
              <p>3* & above</p>
            </Ratings>
            <Ratings>
              <input type="checkbox" />
              <p>2* & above</p>
            </Ratings>
            <Ratings>
              <input type="checkbox" />
              <p>1* & above</p>
            </Ratings>{" "}
          </>
        )}
        <hr />
        <OffersContainer onClick={handleClick}>
          <h2>OFFERS</h2>
          <ExpandMoreIcon />
        </OffersContainer>
        {click && (
          <>
            {" "}
            <Offers>
              <input type="checkbox" />
              <p>Buy More, Save More</p>
            </Offers>
            <Offers>
              <input type="checkbox" />
              <p>No Cost EMI</p>
            </Offers>
            <Offers>
              <input type="checkbox" />
              <p>Special Price</p>
            </Offers>{" "}
          </>
        )}
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  hr {
    height: 0.3px;
    opacity: 0.3;
  }
  flex: 0.2;
  /* border: 1px solid black; */
  background-color: #ffffff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  margin: 0.3rem;
  cursor: pointer;
`;
const Filter = styled.div`
  h1 {
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0.5rem;
    padding: 0.3rem;
  }
`;
const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding: 0.3rem;

  h2 {
    font-weight: 500;
    font-size: 0.8rem;
  }
`;
const Categories = styled.div`
  h3 {
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0.3rem;
    margin: 0.3rem;
  }
  p {
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  h2 {
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0.3rem;
    margin: 0.3rem;
  }
  input {
    min-height: 0.3rem;
    margin: 0.3rem;
  }
  select {
    margin: 0.3rem;
    padding: 0.3rem;
  }
`;
const AssuredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.3rem;
  margin-left: 0.8rem;
  padding: 0.3rem;
  img {
    height: 1.3rem;
  }
  .MuiSvgIcon-root {
    opacity: 0.7;
  }
`;
const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding: 0.3rem;
  h2 {
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0.3rem;
    margin: 0.3rem;
  }
`;
const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding: 0.3rem;
  h2 {
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0.3rem;
    margin: 0.3rem;
  }
`;

const Ratings = styled.div`
  overflow: hidden;
  input,
  p {
    display: inline-flex;

    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;
const OffersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem;
  padding: 0.3rem;
  h2 {
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0.3rem;
    margin: 0.3rem;
  }
`;
const Offers = styled.div`
  input,
  p {
    display: inline-flex;

    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;
