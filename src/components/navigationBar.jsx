import {
  NavLink,
  NavBar,
  NavLinks,
  NavSiteID,
  NavCart,
  Icon,
  H1,
  CartAmount,
} from "../styled-tags";
import { mdilCart } from "@mdi/light-js";
import { mdiStoreCheck } from "@mdi/js";
import PropTypes from "prop-types";
import localforage from "localforage";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

NavLink.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default function NavigationBar() {
  const data = useLoaderData();
  const [amount, setAmount] = useState(data?.amount);
  useEffect(() => {
    setAmount(data?.amount);
  });
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
          <Icon
            onClick={() => {
              localforage.setItem("data", { amount: 0 });
              setAmount(0);
              data.amount = 0;
            }}
            path={mdilCart}
            size={1.3}
          />
            <CartAmount>
              <p>{data?.amount>99?'99+':data?.amount}</p>
            </CartAmount>
        </NavCart>
      </NavBar>
    </>
  );
}
