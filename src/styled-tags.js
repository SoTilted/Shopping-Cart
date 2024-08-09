import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Icon as standardIcon } from "@mdi/react";

const color1 = "rgba(107, 111, 127, 0.7)"; // body background-color
const color2 = "rgba(107, 111, 127, 0.8)"; // NavigationBar background-color
const color3 = "rgb(107, 111, 127)"; // active/hover button background-color

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    background-color: ${color1};
    color:white;
  }
`;
const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const NavLink = styled(BaseNavLink)`
  font-size: 1rem;
  border-radius: 5px;
  color: white;
  transition: ease-in-out 0.4s;
  text-decoration: none;
  padding: 10px;
  &:visited {
    color: white;
  }
  &:hover {
    background-color: ${color3};
  }
  &.active {
    background-color: ${color3};
    box-shadow: 0 0px 8px rgb(0, 0, 0, 0.7);
  }
`;
const NavBar = styled.nav`
  justify-content: space-between;
  gap: 4px;
  display: flex;
  width: 100dvw;
  background-color: ${color2};
  box-shadow: 0 6px 6px rgb(0, 0, 0, 0.4);
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
  color: white;
`;

export { NavLink, H1, NavBar, NavLinks, NavSiteID, NavCart, GlobalStyle, Icon };
