"use client";
import { ArrowDropDown } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';

const StyledIconButton = styled(IconButton)({
  position: "absolute",
  right: "-80%",
  top: "50%",
  transform: 'translateY(-50%)',
  outline: "none",
  '&:hover': {
    backgroundColor: "transparent",
  },
});

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuChangeStatus = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleDrawerClose();
  };

  const handleMenuClick = (path: string) => {
    router.push(path);
    handleDrawerClose();
    handleMenuClose();
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Hidden mdDown>
        <AppBar position="static" sx={{ backgroundColor: "#23856D" }}>
          <MaxWidthWrapper>
            <Toolbar>
              <Box display="flex" alignItems="center">
                <IconButton color="inherit">
                  <PhoneIcon />
                </IconButton>
                <Typography variant="body2">(225) 555-0118</Typography>
                <IconButton color="inherit" style={{ marginLeft: 10 }}>
                  <EmailIcon />
                </IconButton>
                <Typography variant="body2">michelle.rivera@example.com</Typography>
              </Box>

              <Hidden mdDown>
                <Typography variant="body1" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Follow Us and get a chance to win 80% off
                </Typography>
              </Hidden>

              <Box display="flex" alignItems="center">
                <Hidden mdDown>
                  <Typography variant="body1" style={{ marginRight: 10 }}>
                    Follow Us:
                  </Typography>
                </Hidden>
                <IconButton color="inherit">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit">
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="inherit">
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </MaxWidthWrapper>
        </AppBar>
      </Hidden>
      <AppBar position={isScrolled ? "fixed" : "static"} sx={{ backgroundColor: "white", boxShadow: isScrolled && !isMobile ? 1 : 0 }}>
        <MaxWidthWrapper>
          <Toolbar style={{ paddingInline: isMobile ? "0px" : "auto" }}>
            <Hidden mdDown>
              <Typography variant="h6" color="#252B42" fontWeight={700} fontSize="24px" lineHeight="32px">Bandage</Typography>
            </Hidden>
            {/* Hamburger Menu Icon for Mobile */}
            <Hidden mdUp>
              <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                <Typography variant="h6" color="#252B42" fontWeight={700} fontSize="24px" lineHeight="32px">Bandage</Typography>

                <IconButton edge="end" onClick={handleDrawerOpen} sx={{ marginRight: 2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z" fill="#737373" />
                  </svg>
                </IconButton>
              </Box>
            </Hidden>

            <Hidden mdDown>
              <Box flex={1} display="flex" justifyContent="center">
                <Link href="/" style={{ margin: '0 16px', color: '#737373' }}>
                  Home
                </Link>
                <Box margin="0 16px" color="#737373" position="relative" onClick={handleMenuChangeStatus} sx={{ cursor: "pointer" }}>
                  <span>Shop</span>
                  <StyledIconButton
                    aria-label="dropdown"
                    aria-controls="shop-menu"
                    aria-haspopup="true"
                    onClick={handleMenuChangeStatus}
                  >
                    <ArrowDropDown />
                  </StyledIconButton>
                  <Menu
                    id="shop-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuChangeStatus}
                    onClick={handleMenuChangeStatus}
                  >
                    <MenuItem onClick={() => handleMenuClick("/")}>New Shop</MenuItem>
                    <MenuItem onClick={() => handleMenuClick("/")}>Old Shop</MenuItem>
                  </Menu>
                </Box>
                <Link href="/" style={{ margin: '0 16px', color: '#737373' }}>
                  About
                </Link>
                <Link href="/" style={{ margin: '0 16px', color: '#737373' }}>
                  Blog
                </Link>
                <Link href="/" style={{ margin: '0 16px', color: '#737373' }}>
                  Contact
                </Link>
                <Link href="/" style={{ margin: '0 16px', color: '#737373' }}>
                  Pages
                </Link>
              </Box>

              <Box display="flex" alignItems="center">
                <IconButton sx={{ color: "#23A6F0" }}>
                  <AccountCircleIcon />
                  <Typography fontSize="14px" fontWeight={700} lineHeight="24px" marginLeft="1px">Login / Register</Typography>
                </IconButton>
                <IconButton sx={{ color: "#23A6F0" }}>
                  <SearchIcon />
                </IconButton>
                <IconButton sx={{ color: "#23A6F0" }}>
                  <ShoppingCartIcon />
                  <Typography color="#23A6F0" fontSize="12px" fontWeight={700} lineHeight="24px" marginLeft="1px">1</Typography>
                </IconButton>
                <IconButton sx={{ color: "#23A6F0" }}>
                  <FavoriteIcon />
                  <Typography color="#23A6F0" fontSize="12px" fontWeight={700} lineHeight="24px" marginLeft="1px">1</Typography>
                </IconButton>
              </Box>
            </Hidden>

            {/* Mobile Drawer */}
            {drawerOpen && (
              <Hidden mdUp>
                <Box position="absolute" bgcolor="white" top="50px" height="100vh" width="100%">
                  <div onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
                    <Box flex={1} display="flex" justifyContent="center" alignItems="center" flexDirection="column" rowGap={4} fontSize="20px" paddingBlock={4}>
                      <Link href="/" style={{ margin: '0 16px', color: '#737373' }} onClick={handleDrawerClose}>
                        Home
                      </Link>
                      <Box margin="0 16px" color="#737373" position="relative" onClick={handleMenuChangeStatus} sx={{ cursor: "pointer" }}>
                        <span>Shop</span>
                        <StyledIconButton
                          aria-label="dropdown"
                          aria-controls="shop-menu"
                          aria-haspopup="true"
                          onClick={handleMenuChangeStatus}
                        >
                          <ArrowDropDown />
                        </StyledIconButton>
                        <Menu
                          id="shop-menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuChangeStatus}
                          onClick={handleMenuChangeStatus}
                        >
                          <MenuItem onClick={() => handleMenuClick("/")}>New Shop</MenuItem>
                          <MenuItem onClick={() => handleMenuClick("/")}>Old Shop</MenuItem>
                        </Menu>
                      </Box>
                      <Link href="/" style={{ margin: '0 16px', color: '#737373' }} onClick={handleDrawerClose}>
                        About
                      </Link>
                      <Link href="/" style={{ margin: '0 16px', color: '#737373' }} onClick={handleDrawerClose}>
                        Blog
                      </Link>
                      <Link href="/" style={{ margin: '0 16px', color: '#737373' }} onClick={handleDrawerClose}>
                        Contact
                      </Link>
                      <Link href="/" style={{ margin: '0 16px', color: '#737373' }} onClick={handleDrawerClose}>
                        Pages
                      </Link>
                    </Box>

                    <Box display="flex" alignItems="center" flexDirection="column" fontSize="20px">
                      <IconButton sx={{ color: "#23A6F0" }} onClick={handleDrawerClose}>
                        <AccountCircleIcon />
                        <Typography fontSize="14px" fontWeight={700} lineHeight="24px" marginLeft="1px">Login / Register</Typography>
                      </IconButton>
                      <IconButton sx={{ color: "#23A6F0" }} onClick={handleDrawerClose}>
                        <SearchIcon />
                      </IconButton>
                      <IconButton sx={{ color: "#23A6F0" }} onClick={handleDrawerClose}>
                        <ShoppingCartIcon />
                        <Typography color="#23A6F0" fontSize="12px" fontWeight={700} lineHeight="24px" marginLeft="1px">1</Typography>
                      </IconButton>
                      <IconButton sx={{ color: "#23A6F0" }} onClick={handleDrawerClose}>
                        <FavoriteIcon />
                        <Typography color="#23A6F0" fontSize="12px" fontWeight={700} lineHeight="24px" marginLeft="1px">1</Typography>
                      </IconButton>
                    </Box>
                  </div>
                </Box>
              </Hidden>
            )}
          </Toolbar>
        </MaxWidthWrapper>
      </AppBar>
    </>
  );
};

export default Navbar;
