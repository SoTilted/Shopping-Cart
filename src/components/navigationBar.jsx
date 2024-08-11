import {
  NavLink,
  NavBar,
  NavLinks,
  NavSiteID,
  NavCart,
  Icon,
  H1,
} from "../styled-tags";
import { mdilCart } from "@mdi/light-js";
import { mdiStoreCheck } from "@mdi/js";
import PropTypes from "prop-types";
NavLink.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default function NavigationBar() {
  return (
    <>
      <NavBar>
        <NavSiteID>
          <Icon primary={true} path={mdiStoreCheck} size={1.5} />
          <H1>Shop</H1>
        </NavSiteID>
        <NavLinks>
          <NavLink primary={true} to={"/"}>
            Home
          </NavLink>
          <NavLink primary={true} to={"shop"}>
            Shop
          </NavLink>
        </NavLinks>
        <NavCart>
          <Icon path={mdilCart} size={1.3} />
        </NavCart>
      </NavBar>
    </>
  );
}
