import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Icon as standardIcon } from "@mdi/react";
import img from "./assets/indian_jewellery.jpg";
import svg from "./assets/svg-shape-3.svg";
import font from "./assets/Courgette/Courgette-Regular.ttf";
import font2 from "./assets/Cinzel/Cinzel-VariableFont_wght.ttf";
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
  @font-face{
    font-family:'Cinzel';
    src:url(${font2}) format('truetype');
  }
  @keyframes shine {
    0% {left: -100px}
    20% {left: 100%}
    100% {left: 100%}}
}
`;

const H1 = styled.h1`
  font-family: ${(props) => (props.primary ? `Courgette` : "Cinzel")};
  border-bottom: ${(props) =>
    props.underscore ? `2px solid ${titleColor}` : "none"};

  @media (min-width: 365px) and (max-width: 474px) {
    font-size: ${(props) => (props.primary ? `1.5rem` : "2rem")};
    line-height: 1.5rem;
  }
  @media (max-width: 382px) {
    font-size: ${(props) => (props.primary ? `1.3rem` : "1.8rem")};
    line-height: 1.4rem;
  }
  padding: 0;
  margin: 0;
  color: ${(props) => (props.underscore ? `${titleColor}` : "white")};
  line-height: 2.5rem;
`;

const NavLink = styled(BaseNavLink)`
  @media (max-width: 474px) {
    font-size: 1.2rem;
  }
  font-size: 1.5rem;
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
  gap: 100px;
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
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 25px;
  justify-content: center;
  width: 50dv;
`;

const CardDiv = styled.div`
  box-shadow: 0 0px 20px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-top: 8px solid ${titleColor};
  border-radius: 16px;
  img {
    object-fit:fit;
    height:200px;
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
    padding:25px;
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  form {
    display:flex;
    flex-direction:column;
    justify-content:end;
    gap:5px;
    flex:1;
    padding:2px;
}
  }
  input,button {
    font-size:1.3rem;
    border-radius:16px;
  }
  button {
    background-color:${titleColor};
    font-size:1.3rem;
    color:black:
    font-weight:600;
    border:1px solid black;
    cursor:pointer;
    box-shadow: 0 0px 8px${titleColor};
  }
  button:hover {
  opacity:0.7;
  }
  img {
    &.loader {
      width: 50px;
      height:50px;
      aspect-ratio: 1;
      display: grid;
      border-radius: 50%;
      background:
        linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(0 0 0/100%) 0) 50%/8% 100%,
        linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(0 0 0/75% ) 0) 50%/100% 8%;
      background-repeat: no-repeat;
      animation: l23 1s infinite steps(12);
    }
    &.loader::before,
    &.loader::after {
       content: "";
       grid-area: 1/1;
       border-radius: 50%;
       background: inherit;
       opacity: 0.915;
       transform: rotate(30deg);
    }
    &.loader::after {
       opacity: 0.83;
       transform: rotate(60deg);
    }
    @keyframes l23 {
      100% {transform: rotate(1turn)}
  }

`;

const CartAmount = styled.div`
  margin-top: 8px;
`;

const Category = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 25px;
  }
  margin: 100px;
`;
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
