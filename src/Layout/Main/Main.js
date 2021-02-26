import React from "react";
import TopBar from "./Components/TopBar";

const Main = (props) => {
  return (
    <div>
      <TopBar />
      <main>{props.children}</main>
    </div>
  );
};

export default Main;
