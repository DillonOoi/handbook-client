import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from "../../styles/Navbar.module.css"
import {useRouter} from 'next/router'
import {useState} from "react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function TopNav() {
  
  // LOGGED-IN USER'S PROFILE PIC, NAME, & ID
  const [pfp, setPfp] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata')).pfp : null)
  const [name, setName] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata')).name : null)
  const [uid, setUid] = useState(typeof window !== 'undefined'? JSON.parse(localStorage.getItem('userdata'))._id : null)


  // REDIRECTING TO OTHER PAGES
  const router = useRouter()


  // DROPDOWN MENU ANCHORS
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [mobileMoreAnchorEl2, setMobileMoreAnchorEl2] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMenuOpen2 = Boolean(anchorEl2);
  const isMobileMenuOpen2 = Boolean(mobileMoreAnchorEl2);


  // OPENING DROPDOWN MENUS
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotifsMenuOpen = (event) => {
    setAnchorEl2(event.currentTarget)
  }


  // CLOSING MOBILE DROPDOWN MENUS
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    setMobileMoreAnchorEl2(null);
  };


  // CLOSING DROPDOWN MENUS
  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
    handleMobileMenuClose();
  };


  // OPENING MOBILE DROPDOWN MENUS
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    setMobileMoreAnchorEl2(event.currentTarget);
  };



  const menuId = 'primary-search-account-menu';



  // DROPDOWN MENUS CONTENT
  const renderMenu = (
    <>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      <div className="d-flex align-items-center mx-4 my-3 mb-4">
        <a 
          onClick={() => 
            
            router.replace(`/${uid}`)    
          } 
          className="custom_anchor d-flex align-items-center"
        >
          {
            pfp ?
              <img 
              src={pfp} 
              className="avatar_style_2">
              </img>
            :
              <AccountCircle className="avatar_style_2"/>
          }     
          <p className='m-0 ms-2'>My Profile</p>
        </a>     
      </div>

      <div className="mx-4 my-3 mb-3">
        <a onClick={() => router.replace('/')} className="custom_anchor">
          <p className='m-0'>Log Out</p>
        </a>
      </div>
    </Menu>

    <Menu
      anchorEl={anchorEl2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen2}
      onClose={handleMenuClose}
    >
      <div className="d-flex align-items-center mx-4 my-3 mb-4">
        <a href="/" className="custom_anchor">
          <img src="dillon.png" className="avatar_style_3"/>
        </a>     
        <div>
          <p className='mb-1'>Dill Pickle sent you a friend request</p>
          <button className='custom_btn_4 me-1'>Accept</button>
          <button className='custom_btn_3'>Decline</button>
        </div>
      </div>

      <div className="d-flex align-items-center mx-4 my-3 mb-4">
        <a href="/" className="custom_anchor">
          <img src="dillon.png" className="avatar_style_3"/>   
        </a>
        <div>
          <p className='mb-1'>Dill Pickle sent you a friend request</p>
          <button className='custom_btn_4 me-1'>Accept</button>
          <button className='custom_btn_3'>Decline</button>
        </div>
      </div>

      <MenuItem onClick={handleMenuClose}>A notification for smt idk</MenuItem>
    </Menu>
    </>
  );


  // MOBILE VIEW
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton 
          size="large" 
          aria-label="show 4 new mails" 
          color="inherit"
          onClick={() => router.replace('/messages')}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p className="m-0">Messages</p>
      </MenuItem>
      <MenuItem onClick={handleNotifsMenuOpen}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p className="m-0">Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit" 
        >
          {
            pfp ?
              <img 
              src={pfp} 
              className="avatar_style_1">
              </img>
            :
              <AccountCircle/>
          }       
        </IconButton>
        <p className="m-0">Profile</p>
      </MenuItem>
    </Menu>
  );



  // DEKTOP VIEW
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={styles.navbar_color}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => router.replace('/homepage')}
          >
          <img className={styles.navbar_logo} src="handbook-logo.png"/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <h4 className='pt-2'>handbook</h4>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton 
              size="large" 
              aria-label="show 4 new mails" 
              color="inherit"
              onClick={() => router.replace('/messages')}
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotifsMenuOpen}
            >
              <Badge badgeContent={71} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              // onClick={() => router.replace(`/${uid}`)}
              onClick={handleProfileMenuOpen}
            >
              {
                pfp ?
                  <img 
                  src={pfp} 
                  className="avatar_style_1">
                  </img>
                :
                  <AccountCircle/>
              }       
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default TopNav