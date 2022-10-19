import ArticleIcon from '@mui/icons-material/Article';
import { Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUser } from '../../reducks/users/selectors';

const drawerWidth = 260;

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9)
            }
        })
    }
}));

const Sidebar = ({ toggleDrawer, open }) => {
    const selector = useSelector(state => state)
    const user = getUser(selector);
    const history = useHistory();
    const { pathname } = history.location;
    const activeClass = path => (pathname === path ? { backgroundColor: '#cccccc !important' } : {});

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1]
                }}
            > 
            <Typography component="h6" variant="h5" color="inherit"  >
                   TECH I.S. HRM
        </Typography>
               
               
            </Toolbar>
            <Divider />
            <List>
            { user.role !== 'hr_level_1' || ['director','hr_level_2'].includes(user.team) ?
                <ListItem sx={activeClass('/leads')} button onClick={() => history.push('/leads')}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Leads" />
                </ListItem>
                :null }

                

                <ListItem sx={activeClass('/vocabulary')} button onClick={() => history.push('/vocabulary')}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vocabulary" />
                </ListItem>



                <ListItem sx={activeClass('/communication')} button onClick={() => history.push('/communication')}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Communication" />
                </ListItem>

            { user.role !== ('hr_level_1') || ['director'].includes(user.team) ?
                <ListItem sx={activeClass('/hr')} button onClick={() => history.push('/hr')}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="HR Round" />
                </ListItem>
                :null }

            { user.role !== ('hr_level_1') || ['director'].includes(user.team) ?
                <ListItem sx={activeClass('/offered')} button onClick={() => history.push('/offered')}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Offered & Joined Status" />
                </ListItem>
                :null }     
                <ListItem sx={activeClass('/')} button onClick={() => history.push('')}>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Admin" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
