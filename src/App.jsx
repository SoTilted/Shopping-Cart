import { useState } from "react";
import NavigationBar from "./components/navigationBar";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styled-tags";
import FooterBar from "./components/footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Outlet />
      <FooterBar>
        {" "}
        <a href="https://github.com/SoTilted/">SoTilted &copy;</a>
      </FooterBar>
    </>
  );
}

export default App;
