import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./index.css";
import { useState } from "react";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <Navbar cartQuantity={cartQuantity} />
      <Outlet context={[cartQuantity, setCartQuantity]} />
    </>
  );
}

export default App;
