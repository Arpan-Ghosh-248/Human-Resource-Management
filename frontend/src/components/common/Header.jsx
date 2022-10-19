import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../reducks/users/operations';
import { getUser } from '../../reducks/users/selectors';
import CustomDialog from './ConfirmationDialog';
import { history } from '../../index';

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Header = ({ toggleDrawer, open }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector(state => state)
    const [title, setTitle] = useState();
    const user = getUser(selector);

    const [openDialog, setOpenDialog] = useState(false);
    let profile = `profile/${user.id}`

    useEffect(() => {
        if (location.pathname.includes('vocabulary')) {
            setTitle('Vocabulary');
        } else if (location.pathname.includes('leads')) {
            setTitle('Leads');
        } else if (location.pathname.includes('communication')) {
            setTitle('Communication');
        } else if (location.pathname.includes('hr')) {
            setTitle('HR Round');
        } else if (location.pathname.includes('offered')) {
            setTitle('Offered & Joined Status');
        } else{
            setTitle('Admins')
        }
    }, [location]);

    return (
        <AppBar position="absolute" open={open}>
            <CustomDialog 
                text="Are you sure to logout?"
                isOpen={openDialog}
                onClose={() => setOpenDialog(false)}
                onConfirm={() => dispatch(signOut())} />
            <Toolbar
                sx={{
                    pr: '24px' // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' })
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <Typography component="h3" variant="h6" color="inherit"  >
                    {user.user_name}
                </Typography>
                <Divider />
                <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ ml: 3, cursor: 'pointer' }}
                    onClick={() => setOpenDialog(true)}
                >
                    Logout
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
