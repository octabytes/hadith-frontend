import React from "react";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";

const Main = (props) => {
  return (
    <div>
      <TopBar />
      <main style={{ margin: 24 }}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Main;
