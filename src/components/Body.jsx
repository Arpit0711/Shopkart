import { ChevronRightRounded } from "@material-ui/icons";
import ChevronRightIcon from "@material-ui/icons/ChevronLeft";
import styled from "styled-components";
import { Link } from "@material-ui/core";
import Cards from "./Cards";

function Body() {
  return (
    <BodyContainer>
      <Nav>
        <p>
          Home{<ChevronRightRounded />} Furniture {<ChevronRightRounded />}{" "}
          Sofas
        </p>
      </Nav>
      <Heading>
        <h1>Top 20 Inflatable Sofa</h1>
        <p>(Showing 1-10 products of 10 products)</p>
      </Heading>

      <ul>
        <h3>Sort by</h3>
        <li Link to="/popularity">
          Popularity
        </li>
        <li Link to="/LowToHigh">
          Price- Low to High
        </li>
        <li Link to="/HighToLow">
          Price-High to Low
        </li>
        <li Link to="/Newest">
          Newest First
        </li>
        <li Link to="/Discount">
          Discount
        </li>
      </ul>
      <hr />
      <Cards />
    </BodyContainer>
  );
}

export default Body;

const BodyContainer = styled.div`
  hr {
    opacity: 0.4;
  }
  flex: 0.8;
  background-color: #ffffff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0.3rem;
  ul {
    list-style: none;
    display: flex;

    h3 {
      margin-left: 1rem;
      display: flex;
      align-items: center;
    }
    li {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      margin-top: 0.2rem;
      margin-right: 1rem;
    }
  }
`;

const Nav = styled.div`
  p {
    display: flex;
    align-items: center;
    margin: 1rem;
    color: #878787;
    font-weight: bolder;
    font-size: 0.8rem;
    font-weight: 400;
  }
  .MuiSvgIcon-root {
  }
  /* display: flex; */
  /* align-items: center; */
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  h1 {
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    font-weight: 500;
  }
`;
