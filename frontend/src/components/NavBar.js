import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom'
import AdminContext from './AdminContext';

const pages = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Department Overview',
    path: '/departmentOverview'
  },
  {
    name: 'Faculty Details',
    path: '/facultyDetails'
  },
  {
    name: 'Time Table',
    path: '/timeTable'
  },
  {
    name: 'Roll List',
    path: '/rollList'
  },
  {
    name: 'Forum',
    path: '/forum'
  },
  {
    name: 'Learning Material',
    path: '/learningMaterial'
  },
  {
    name: "Students' Achievements",
    path: '/studentsAchievements'
  },
]

export default function NavBar() {

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const { setAdminOpen, admin, logout } = React.useContext(AdminContext)

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 2, borderBottom: '1px solid' }}>
          <img src="./img/pce-logo.png" style={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} width={'150px'} />
          <Box ml={3}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <small>LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA'S </small>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                // pt:1,
                fontWeight: 'bold',
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PRIYADARSHINI COLLEGE OF ENGINEERING
            </Typography>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                pt: 1,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Electronics & Communication Department
            </Typography>
          </Box>
          <Box ml={3} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Typography variant='h6'>
              <small>LTJSS </small>
              <br />
              <b>Priyadarshini College Of Engineering</b>
              <Toolbar disableGutters>
                <small>Electronics & Communication Department</small>
              </Toolbar>
            </Typography>
          </Box>
        </Toolbar>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!admin && pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {
                !admin &&
                <MenuItem key={'login'} onClick={handleCloseNavMenu}>

                  <Button

                    onClick={() => { setAdminOpen(true); navigate('/') }}
                  >
                    Admin Login
                  </Button>
                </MenuItem>
              }
              {
                admin &&
                <MenuItem key={'login'} onClick={handleCloseNavMenu}>

                  <Button

                    onClick={() => { logout() }}
                  >
                    Logout
                  </Button>
                </MenuItem>
              }
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <small>LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA'S </small>
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  // pt:1,
                  fontWeight: 'bold',
                  display: { xs: 'none', md: 'flex' },
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                PRIYADARSHINI COLLEGE OF ENGINEERING
              </Typography>
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  pt: 1,
                  display: { xs: 'none', md: 'flex' },
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Electronics & Communication Department
              </Typography>
            </Box>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }}>
            {
              !admin && pages.map((page) => (
                <Button
                  component={Link}
                  to={page.path}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}

            {
              !admin && <Button

                onClick={() => { setAdminOpen(true); navigate('/') }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Admin Login
              </Button>
            }
            {
              admin && <Button

                onClick={() => { logout() }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Logout
              </Button>
            }
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}

