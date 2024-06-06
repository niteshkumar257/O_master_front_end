import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const logout = () => {
        setIsLogin(false);
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLogin(!!token);
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    7 UP 7 DOWN Game
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>
                                <Link
                                    style={{ textDecoration: "none", color: 'black', fontSize: '1.2rem' }}
                                    onClick={logout}
                                    to="/login"
                                >
                                    {isLogin ? "Logout" : "Login"}
                                </Link>
                            </MenuItem>
                            {isLogin && (
                                <>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link
                                            style={{ textDecoration: "none", color: 'black', fontSize: "1.2rem" }}
                                            to="/history"
                                        >
                                            History
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link
                                            style={{ textDecoration: "none", color: 'black', fontSize: "1.2rem" }}
                                            to="/home"
                                        >
                                            Home
                                        </Link>
                                    </MenuItem>
                                </>
                            )}
                            {!isLogin && (
                                <MenuItem onClick={handleMenuClose}>
                                    <Link
                                        style={{ textDecoration: "none", color: 'black', fontSize: "1.2rem" }}
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </MenuItem>
                            )}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{
                        width: '30%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant="h6">
                            <Link
                                style={{ textDecoration: "none", color: 'white', fontSize: '1.5rem' }}
                                onClick={logout}
                                to="/login"
                            >
                                {isLogin ? "Logout" : "Login"}
                            </Link>
                        </Typography>

                        {isLogin && (
                            <>
                                <Typography variant="h6">
                                    <Link
                                        style={{ textDecoration: "none", color: 'white', fontSize: "1.5rem" }}
                                        to="/history"
                                    >
                                        History
                                    </Link>
                                </Typography>
                                <Typography variant="h6">
                                    <Link
                                        style={{ textDecoration: "none", color: 'white', fontSize: "1.5rem" }}
                                        to="/home"
                                    >
                                        Home
                                    </Link>
                                </Typography>
                            </>
                        )}

                        {!isLogin && (
                            <Typography variant="h6">
                                <Link
                                    style={{ textDecoration: "none", color: 'white', fontSize: "1.5rem" }}
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </Typography>
                        )}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
