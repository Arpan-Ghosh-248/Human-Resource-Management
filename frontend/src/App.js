import React, { useState } from 'react';
import Router from './Router';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from './components/common/Copyright';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import { useLocation } from 'react-router';

import "./utils/custom-array-func";

const App = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const location = useLocation();
    return (
        <>
            {location.pathname.includes('login') ? (
                <Router />
            ) : (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Header toggleDrawer={toggleDrawer} open={open} />
                    <Sidebar toggleDrawer={toggleDrawer} open={open} />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: '#fff',
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                            width: 1
                        }}
                    >
                        <Container maxWidth={false} sx={{ mt: 12, mb: 4, maxWidth: 1 }}>
                            <Router />
                            <Copyright sx={{ pt: 4 }} />
                        </Container>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default App;
