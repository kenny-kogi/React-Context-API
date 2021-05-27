import React from "react";
import Nav from "../../components/Nav";
import AddJet from "../../components/AddJet";
import JetList from "../../components/JetList";

const Home = () => {
  return (
    <div>
      <Nav />
      <AddJet />
      <JetList />
    </div>
  );
};

export default Home;
