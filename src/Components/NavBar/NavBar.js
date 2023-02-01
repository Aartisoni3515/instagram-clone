import React from "react";
import "./NavBar.css";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';

import insta_log from "../Images/logoinsta.png"
import home from "../Images/home.svg";
import message from "../Images/message.svg";
import find from "../Images/find.svg";
import react from "../Images/love.svg";
import dp from "../Images/dp6.png"


const NavBar = () => {
  return (
    <>
      <div className="navbar__barContent">
        <Grid container>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={3}>
            <img className="navbar_logo" src={insta_log} width="105px" />
          </Grid>
          <Grid item xs={3}>
            <input
              text="text"
              className="navbar__searchBar"
              placeholder="Search"
            />
          </Grid>
          <Grid item xs={3} style={{ display: "flex" }}>
            <img className="navbar__img" src={home} width="25px" />
            <img className="navbar__img" src={message} width="25px" />
            <img className="navbar__img" src={find} width="25px" />
            <img className="navbar__img" src={react} width="25px" />
            <Avatar
              src={dp}
              className="navbar__img"
              style={{ maxWidth: "25px", maxHeight: "25px" }}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default NavBar;
