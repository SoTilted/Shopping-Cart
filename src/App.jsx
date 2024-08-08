import { useState } from "react";
import NavigationBar from "./components/navigationBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
