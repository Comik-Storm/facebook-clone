import React, {useState} from 'react';
import "../stylesheets/header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import {Avatar, Badge, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../utils/store/auth-slice";
import {auth} from "../utils/Firebase";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const open = Boolean(anchorEl)
    const handleLogOut = () => {
        auth.signOut().then(() => {
            dispatch(authActions.setUserStatus(null))
        })
    }
    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div
            className="header shadow-sm px-2 py-1 bg-body rounded sticky-top py-2 px-2 d-flex flex-row justify-content-between align-items-center">
            <div className="header-left">
                <div className="header-left-icon d-flex flex-row align-items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                        alt="Facebook"
                    />
                    <div className="header-left-search ms-2 p-2">
                        <SearchIcon/>
                        <input type="text" placeholder="Search Facebook"/>
                    </div>
                </div>
            </div>
            <div className="header-middle d-flex flex-row justify-content-around align-items-center">
                <div className="header-middle-option option-active px-4 py-2 m-0">
                    <HomeIcon size="large"/>
                </div>
                <div className="header-middle-option px-4 py-2 m-0">
                    <PeopleIcon size="large"/>
                </div>
                <div className="header-middle-option px-4 py-2 m-0">
                    <OndemandVideoIcon size="large"/>
                </div>
                <div className="header-middle-option px-4 py-2 m-0">
                    <StorefrontOutlinedIcon size="large"/>
                </div>
                <div className="header-middle-option px-4 py-2 m-0">
                    <GroupsIcon size="large"/>
                </div>
            </div>
            <div className="header-right d-flex flex-row justify-content-around align-items-center">
                <div className="header-right-option px-2">
                    <IconButton className="option">
                        <AddIcon size="large"/>
                    </IconButton>
                </div>
                <div className="header-right-option px-2">
                    <IconButton className="option">
                        <ForumIcon size="large"/>
                    </IconButton>
                </div>
                <div className="header-right-option px-2">
                    <IconButton className="option">
                        <Badge badgeContent={11} color="primary">
                            <NotificationsActiveRoundedIcon size="large"/>
                        </Badge>
                    </IconButton>
                </div>
                <div className="header-right-option px-2">
                    <IconButton
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={user.photoURL}/>
                    </IconButton>
                    <Menu
                        open={open}
                        anchorEl={anchorEl}
                        id="account-menu"
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem>
                            <Avatar src={user.photoURL}/> {user.displayName}
                        </MenuItem>
                        <MenuItem className="d-flex flex-row justify-content-between align-items-center pe-0">
                            <div className="d-flex flex-row align-items-center">
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                Settings & privacy
                            </div>
                            <ListItemIcon>
                                <ChevronRightIcon/>
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem className="d-flex flex-row justify-content-between align-items-center pe-0">
                            <div className="d-flex flex-row align-items-center">
                                <ListItemIcon>
                                    <HelpIcon/>
                                </ListItemIcon>
                                Help & support
                            </div>
                            <ListItemIcon>
                                <ChevronRightIcon/>
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem className="d-flex flex-row justify-content-between align-items-center pe-0">
                            <div className="d-flex flex-row align-items-center">
                                <ListItemIcon>
                                    <NightlightIcon/>
                                </ListItemIcon>
                                Display & accessibility
                            </div>
                            <ListItemIcon>
                                <ChevronRightIcon/>
                            </ListItemIcon>
                        </MenuItem>
                        <MenuItem className="d-flex flex-row justify-content-between align-items-center pe-0">
                            <div className="d-flex flex-row align-items-center">
                                <ListItemIcon>
                                    <FeedbackIcon/>
                                </ListItemIcon>
                                Give Feedback
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleLogOut}
                                  className="d-flex flex-row justify-content-between align-items-center pe-0">
                            <div className="d-flex flex-row align-items-center">
                                <ListItemIcon>
                                    <LogoutRoundedIcon/>
                                </ListItemIcon>
                                Log Out
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;