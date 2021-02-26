import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import AppActions from "store/actions/app_actions";

const LanguageMenu = () => {
  const [open, setOpen] = useState();
  const language = useSelector((state) => state.app.language);

  const changeLanguage = (language) => {
    AppActions.selectLanguage(language);
    setOpen(null);
  };

  return (
    <>
      <Button
        color="inherit"
        onClick={(e) => setOpen(e.currentTarget)}
        endIcon={<ExpandMoreIcon />}
      >
        {language}
      </Button>

      <Menu
        id="language-menu"
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={() => setOpen(null)}
      >
        <MenuItem onClick={() => changeLanguage("english")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("urdu")}>Urdu</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageMenu;
