import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./index.css";
import { useState } from "react";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Outlet context={[cartQuantity, setCartQuantity, cart, setCart]} />
    </>
  );
}

export default App;
