import { useState } from "react";
import NavigationBar from "./components/navigationBar";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styled-tags";
function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
