"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { isAuthenticated } from "@/utils/authProvider";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    { title: "Nos services", path: "/services" },
    { title: "Nous contacter", path: "/contact" },
    { title: "À propos", path: "/about" },
    { title: "Blog", path: "/blog" },
    // Conditionally show sign in or sign out based on authentication state
    isAuthenticated
      ? { title: "Se deconnecter", path: "/signout" }
      : { title: "Se connecter", path: "/auth" },
  ];

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className="bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Link href="/">
              <span className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={110} height={80} />
                <Typography
                  variant="h6"
                  className="ml-2 font-bold text-brand-green"
                >
                  Association ABA'A
                </Typography>
              </span>
            </Link>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {navLinks.map((link) => (
                    <MenuItem key={link.title} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link href={link.path}>{link.title}</Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end", 
                }}

              >
                {navLinks.map((link) => (
                  <Button
                    key={link.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "text.primary", display: "block" }}
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
