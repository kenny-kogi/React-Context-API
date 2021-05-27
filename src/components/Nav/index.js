import React, { useContext } from "react";
import { JetContext } from "../../context/JetContext";
import { Wrapper } from "./element";

const Nav = () => {
  const [jets] = useContext(JetContext);
  return (
    <Wrapper>
      <h2>JET AIRCRAFTS LIST</h2>
      <p>Total aircraft in the list: {jets.length}</p>
    </Wrapper>
  );
};

export default Nav;
