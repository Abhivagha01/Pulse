import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Collapse,
  Button,
  ListItemButton,
  ListItem,
  Drawer,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import logo from "../../assets/images/header/logo-light.png";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";
const Header = () => {
  const drawerWidth = 290;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState();

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubMenuOpen();
  };

  const menuItems = [
    {
      label: "Home",
      to: "/",
      subMenu: [],
    },
    {
      label: "Service",
      to: "/service",
      subMenu: [
        { listItem: "Service", to: "/service" },
        { listItem: "Service Details", to: "/service-details" },
      ],
    },
    { label: "About", to: "/about", subMenu: [] },
    {
      label: "Pages",
      to: "/",
      subMenu: [
        { listItem: "Blog List", to: "/blocks-bloglist" },
        { listItem: "Portfolio", to: "/blocks-portfolioblock" },
        { listItem: "Portfolio Details", to: "/portfolio-details" },
        { listItem: "404", to: "/404" },
      ],
    },
    {
      label: "Elements",
      to: "",
      subMenu: [
        { listItem: "Team", to: "/blocks-teamblock" },
        { listItem: "Video Popup", to: "/blocks-videopopup" },
        { listItem: "Progressbar", to: "/blocks-progressbar" },
        { listItem: "Counters", to: "/blocks-counter" },
        { listItem: "Blog List", to: "/blocks-bloglist" },
        { listItem: "Clint Logo", to: "/blocks-clientlogo" },
        { listItem: "Testimonial", to: "/testimonial" },
        { listItem: "Contact Form", to: "/blocks-contactform" },
        { listItem: "Google Map", to: "/blocks-googlemap" },
        { listItem: "Columns", to: "/blocks-columns" },
        { listItem: "Pricing Table", to: "/blocks-pricingtable" },
      ],
    },
    { label: "Contact", to: "/contact", subMenu: [] },
  ];

  const handleSubMenuToggle = (index) => {
    setMobileSubMenuOpen((prevIndex) => (prevIndex === index ? null : index)); // Toggle submenu
  };

  const drawer = (
    <Box>
      <Typography
        sx={{
          mt: 2,
          px: "16px",
          textAlign: "end",
        }}
      >
        <Box>
          <CloseIcon onClick={handleDrawerToggle} />
        </Box>
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Box sx={{ width: "100%" }}>
                <NavLink
                  to={item.to}
                  style={{ color: "unset" }}
                  onClick={
                    item.subMenu.length === 0
                      ? () => setMobileMenuOpen(!mobileMenuOpen)
                      : null
                  }
                >
                  <Box
                    onClick={() => handleSubMenuToggle(index)}
                    sx={{
                      width: "100%",
                      color: "black",
                      display: "flex !important",
                      justifyContent: "space-between",
                      alignItems: "center",
                      "&:hover": {
                        color: theme.palette.red,
                      },
                    }}
                  >
                    <Box sx={{ fontWeight: "500" }}>{item.label}</Box>
                    <Box>
                      {item.subMenu.length === 0 ? (
                        ""
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </Box>
                  </Box>
                </NavLink>

                <Collapse
                  in={index == mobileSubMenuOpen}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    width: "100%",
                    zIndex: "modal",
                    display: item.subMenu.length === 0 ? "none" : "block",
                  }}
                >
                  <Box
                    sx={{
                      pb: 2,
                    }}
                  >
                    <>
                      <Typography
                        key={index}
                        sx={{
                          py: "1px",
                          display: "block",
                          textDecoration: "none",
                          fontSize: "15px",
                        }}
                      >
                        {item.subMenu.map((val, subIndex) => (
                          <NavLink to={val.to} style={{ color: "unset" }}>
                            <Box
                              onClick={handleDrawerToggle}
                              sx={{
                                py: "4px",
                                px: "15px !important",
                                borderRadius: "8px",
                                "&:hover": {
                                  color: theme.palette.red,
                                  backgroundColor: theme.palette.pink,
                                },
                              }}
                              key={val.listItem}
                            >
                              {val.listItem}
                            </Box>
                          </NavLink>
                        ))}
                      </Typography>
                    </>
                  </Box>
                </Collapse>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        sx={{
          position: "absolute",
          boxShadow: "0 2px 48px 0 rgba(0,0,0,.08)",
          backgroundColor: "transparent",
          py: { md: "50px", xs: "13px" },
        }}
      >
        <Toolbar>
          <Box
            sx={{ width: "100%" }}
            px={{ xs: "0rem", sm: "0rem", md: "0rem", xl: "3rem" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: { md: "77.5px", xs: "50px" },
                    width: { md: "186px", xs: "120px" },
                  }}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ objectFit: "contain !important" }}
                  />
                </Box>
              </Typography>
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.textGray, fontSize: "3px" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <nav>
                <Drawer
                  variant="temporary"
                  open={mobileMenuOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </nav>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {menuItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      mx: 1.5,
                      color: theme.palette.textGray,
                      position: "relative",
                      display: "block",
                      textDecoration: "none",
                      fontSize: "16px",
                      transition: "0.5s",
                      fontWeight: "500",
                      cursor: "pointer",
                      "&:hover": {
                        color: theme.palette.red,
                        fontWeight: "500",
                        "& .subMenu": {
                          opacity: item.subMenu.length === 0 ? "0" : "1",
                          visibility:
                            item.subMenu.length === 0 ? "hidden" : "visible",
                        },
                      },
                    }}
                  >
                    <NavLink to={item.to} style={{ color: "unset" }}>
                      {item.label}
                    </NavLink>

                    <Box
                      className="subMenu"
                      sx={{
                        transition: ".5s",
                        backgroundColor: "white",
                        position: "absolute",
                        top: "50px",
                        left: "-100%",
                        borderRadius: "8px",
                        width: "260px",
                        color: "black",
                        p: "15px 10px",
                        visibility: "hidden",
                        opacity: "0",
                      }}
                    >
                      {item.subMenu.map((val, index) => (
                        <NavLink to={val.to} style={{ color: "unset" }}>
                          <Typography
                            sx={{
                              py: "5px",
                              borderRadius: "5px",
                              px: "30px",
                              "&:hover": {
                                color: theme.palette.red,
                                backgroundColor: theme.palette.pink,
                              },
                            }}
                            key={val.listItem}
                          >
                            {val.listItem}
                          </Typography>
                        </NavLink>
                      ))}
                    </Box>
                  </Box>
                ))}
                <Typography sx={{ ml: "20px" }}>
                  <Button
                    variant="outlined"
                    className="button"
                    sx={{ fontSize: "16px" }}
                  >
                    BUY NOW
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
