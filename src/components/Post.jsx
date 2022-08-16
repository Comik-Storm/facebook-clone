import React from 'react';
import {Avatar, Card, CardContent} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../stylesheets/post.css"

const Post = ({message, photo, profileImg, username, timestamp}) => {
    return (
        <Card className="postItem bg-white mt-3 pb-0" sx={{
            width: '30rem'
        }}>
            <CardContent>
                <div className="post-top d-flex flex-row justify-content-center align-items-center">
                    <Avatar src={profileImg} className="post-avatar"/>
                    <div className="mt-3 post-top-info flex-grow-1 d-flex flex-column justify-content-center align-items-start ms-2">
                        <h6 className="m-0 p-0">{username}</h6>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </div>
                </div>
                <div className="post-bottom">
                    <p>{message}</p>
                </div>
                <div className="post-image">
                    <img className="img-fluid border border-bottom border-muted" src={photo} alt=""/>
                </div>

                <div className="post-options border-top border-secondary mt-4 p-0 pt-2 d-flex flex-row justify-content-evenly align-items-center">
                    <div className="post-option">
                        <ThumbUpIcon/>
                        <p>Like</p>
                    </div>
                    <div className="post-option">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <p>Comment</p>
                    </div>
                    <div className="post-option">
                        <NearMeOutlinedIcon/>
                        <p>Share</p>
                    </div>
                    <div className="post-option">
                        <AccountCircleIcon/>
                        <ExpandMoreIcon/>
                        <p>More</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Post;