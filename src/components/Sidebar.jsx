import React from 'react';
import "../stylesheets/sidebar.css"
import {Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import {blue, pink, orange, red} from '@mui/material/colors';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import {useSelector} from "react-redux";


const Sidebar = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="sidebar d-flex flex-column align-items-center justify-content-between p-0 m-0">
            <div className="sidebar-top">
                <List component="nav" aria-label="main">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar src={user.photoURL}/>
                        </ListItemIcon>
                        <ListItemText primary={user.displayName}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon sx={{ color: blue[600]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Find friends"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupsIcon sx={{ color: blue[600]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Groups"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <StorefrontRoundedIcon sx={{ color: blue[600]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <OndemandVideoIcon sx={{ color: blue[600]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Watch"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <HistoryRoundedIcon sx={{ color: blue[600]}}/>
                        </ListItemIcon>
                        <ListItemText primary="Memories"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <BookmarkRoundedIcon sx={{ color: pink['A700']}}/>
                        </ListItemIcon>
                        <ListItemText primary="Saved"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <FlagRoundedIcon sx={{ color: orange['A400']}}/>
                        </ListItemIcon>
                        <ListItemText primary="Pages"/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <EventRoundedIcon sx={{ color: red['A700']}}/>
                        </ListItemIcon>
                        <ListItemText primary="Events"/>
                    </ListItemButton>
                    <Divider sx={{ borderBottom: 1}}/>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader sx={{ bgcolor: 'transparent' }} component="div" id="nested-list-subheader">
                                Your shortcuts
                            </ListSubheader>
                        }
                    >
                    </List>
                </List>
            </div>
        </div>
    );
};

export default Sidebar;