import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LanguageMenu from "./LanguageMenu";

const TopBar = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6">Hadiths</Typography>

          <LanguageMenu />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default TopBar;
