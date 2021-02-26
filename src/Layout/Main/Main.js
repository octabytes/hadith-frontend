import React from "react";
import TopBar from "./Components/TopBar";

const Main = (props) => {
  return (
    <div>
      <TopBar />
      <main style={{ margin: 24 }}>{props.children}</main>
    </div>
  );
};

export default Main;
