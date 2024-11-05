import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header({ title, routes }) {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Header Title */}
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    {title}
                </Typography>
                
                {/* Centered Buttons */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {routes.map((route) => (
                        <Button 
                            key={route.path}
                            color="inherit"
                            onClick={() => navigate(route.path)}
                            sx={{
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            {route.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
