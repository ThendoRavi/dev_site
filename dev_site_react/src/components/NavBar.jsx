import React from "react";
import Logo from "../assets/dev.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const menuOptions = [
    { icon: <HomeIcon />, text: "Home" },
    { icon: <InfoIcon />, text: "About" },
    { icon: <CommentRoundedIcon />, text: "Contact" },
    { icon: <PhoneRoundedIcon />, text: "Call" },
    { icon: <ShoppingCartRoundedIcon />, text: "Cart" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo" className="nav-logo" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Call</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Book</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpen(true)} />
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {menuOptions.map((option, index) => (
              <ListItem key={option.text}>
                <ListItemButton>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}

export default NavBar;
