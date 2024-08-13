import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Icon as standardIcon } from "@mdi/react";
import img from "./assets/indian_jewellery.jpg";
import svg from "./assets/svg-shape-3.svg";
import font from "./assets/Courgette/Courgette-Regular.ttf";
const titleColor = "#ffb139";
const coolBlack = "rgb(32, 35, 30)";

const GlobalStyle = createGlobalStyle`
#root{
  height:100dvh;
  display:flex;
  flex-direction:column;
}
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
} &body {
  
    background-color:${coolBlack};
    color:white;
  }

  p{
    @media (max-width: 382px) {
      font-size:1rem;
    }
    font-size:1.3rem;
    color:rgba(255,255,255,0.8);
  }
  @font-face{
    font-family:'Courgette';
    src:url(${font}) format('truetype');
  }
  @keyframes shine {
    0% {left: -100px}
    20% {left: 100%}
    100% {left: 100%}}
}
`;

const H1 = styled.h1`
  font-family: Courgette;
  border-bottom: ${(props) =>
    props.underscore ? `2px solid ${titleColor}` : "none"};

  @media (min-width: 365px) and (max-width: 474px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  @media (max-width: 382px) {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
  padding: 0;
  margin: 0;
  color: ${(props) => (props.underscore ? `${titleColor}` : "white")};
  line-height: 2.5rem;
`;

const NavLink = styled(BaseNavLink)`
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  transition: ease-in-out 0.4s;
  text-decoration: none;
  padding: 10px;
  background-color: ${(props) => (props.primary ? `` : `${titleColor}`)};
  margin-top: ${(props) => (props.primary ? `0` : `5px`)};
  color: ${(props) => (props.secondary ? `black` : `white`)};
  box-shadow: 0 0px 8px rgb(0, 0, 0, 0.7);
  position: relative;
  overflow: hidden;
  &:visited {
  }
  &:hover {
    color: black;
    background-color: ${titleColor};
  }
  &.active {
    color: black;
    background-color: ${titleColor};
  }
  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    animation: ${(props) =>
      props.secondary ? `shine 3s infinite linear;` : `none`};
  }
`;

const NavBar = styled.nav`
  @media (max-width: 382px) {
    margin: 10px 10px 10px 10px;
    top: 10px;
  }
  margin: 50px 50px 10px 50px;
  position: sticky;
  z-index: 1;
  top: 50px;
  justify-content: space-between;
  gap: 4px;
  display: flex;
  background: ${coolBlack};
  box-shadow: 0 0px 3px rgb(255, 255, 255, 0.6);
  border-radius: 32px;
`;

const NavLinks = styled.div`
  margin-right: 10px;
  display: flex;
  gap: 5dvw;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NavSiteID = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  color: white;
  padding: 2px 0 4px 2px;
`;

const NavCart = styled.div`
  padding: 5px;
  margin-right: 5px;
  transition: transform ease-in 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  }
`;

const Icon = styled(standardIcon)`
  position: relative;
  top: ${(props) => (props.primary ? "10%" : "25%")};
  color: ${(props) => (props.primary ? "white" : "white")};
`;

const Banner = styled.div`
  display: flex;
  z-index: 0;
  background-position: right;
  background-image: url("${img}");
  position: relative;
  height: 40dvw;
  background-repeat: no-repeat;
  background-size: 40% 90%;
`;

const BannerPhoto = styled.div`
  width: 40dvw;
  background-image: url("${svg}");
  background-position: right bottom;
  background-repeat: no-repeat;
`;

const PageHeader = styled.div`
  width: 60dvw;
  background-color: ${coolBlack};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`; //margin: ${(props) => (props.shop ? "auto" : "0")};

const PageInfo = styled.div`
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Box = styled.div`
  @media (max-width: 1180px) {
    max-width: 300px;
    max-height: 186px;
  }
  min-width: 272.25px;
  max-height: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BoxGroup = styled.div`
  @media (max-width: 1180px) {
    flex-direction: column;
    gap: 100px;
  }
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 25px;
  flex: 1;
  a {
    color: ${titleColor};
    font-size: 1.2rem;
  }
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 25px;
  justify-content: center;
  width: 50dvw;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-top: 8px solid ${titleColor};
  border-radius: 16px;
  img {
    max-width: 250px;
    height: 150px;
  }
  h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
  }
  div {
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
    }
   
  }
`;

const CartAmount = styled.div`
  margin-top: 8px;
`;

const Category = styled.div``;
export {
  NavLink,
  H1,
  NavBar,
  NavLinks,
  NavSiteID,
  NavCart,
  GlobalStyle,
  Icon,
  BannerPhoto,
  MainContent,
  PageHeader,
  PageInfo,
  Banner,
  Box,
  BoxGroup,
  Footer,
  ItemList,
  CardDiv,
  Category,
  CartAmount,
};
