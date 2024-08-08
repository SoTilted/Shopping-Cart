import { NavLink } from "react-router-dom";
export default function NavigationBar() {
  return (
    <>
      <div className="navigationBar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"shop"}>Shop</NavLink>
      </div>
    </>
  );
}
