import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#d2d2d2",
      }}
    >
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
          CopyRights &copy; OctaByte.
          <a
            href="https://github.com/octabytes/hadith-frontend"
            target="_blank"
          >
            Code on GitHub
          </a>
        </Typography>
        <Typography>
          <a
            href="https://github.com/octabytes/hadith-frontend/issues"
            target="_blank"
          >
            Report Issue
          </a>
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Footer;
