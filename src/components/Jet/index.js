import React from "react";
import { Wrapper } from "./element";
import PropTypes from "prop-types";

function Jet({ name, country }) {
  return (
    <Wrapper>
      <h3 className="Jet__name">{name}</h3>
      <p className="Jet__country">{country}</p>
    </Wrapper>
  );
}

Jet.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
};

export default Jet;
