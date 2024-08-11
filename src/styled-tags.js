import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Icon as standardIcon } from "@mdi/react";
import img from "./assets/ring.png";
import svg from "./assets/svg-shape-3.svg";
import font from "./assets/Courgette/Courgette-Regular.ttf";
const titleColor = "#ffb139";
const lightGreen = "rgb(100, 159, 74)";
const darkGreen = "rgb(46, 84, 1)";
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
    background-color:${darkGreen};
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
`;
const NavBar = styled.nav`
  position: sticky;
  z-index: 1;
  top: 0;
  justify-content: space-between;
  gap: 4px;
  display: flex;
  width: 100dvw;
  background: linear-gradient(to top, ${darkGreen} 0%, ${lightGreen} 100%);
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.4);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5px;
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
  background-size: 40% 100%;
`;

const BannerPhoto = styled.div`
  width: 40dvw;
  background-image: url("${svg}");
  background-position: right bottom;
  background-repeat: no-repeat;
`;

const PageHeader = styled.div`
  width: 60dvw;
  background-color: ${lightGreen};
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
`;

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
};
