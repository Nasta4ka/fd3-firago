import React from "react";
import Item from "./Item";
import items from "./array";
const myShopName = "iShop";

export default function Shop() {
  return (
    <main>
      <Item shopName={myShopName} shopItems={items} />
    </main>
  );
}
