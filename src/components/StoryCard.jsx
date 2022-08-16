import React from 'react';
import {Card, CardMedia, Divider} from "@mui/material";
import AssistantIcon from '@mui/icons-material/Assistant';
import AlarmIcon from '@mui/icons-material/Alarm';
import ForumIcon from '@mui/icons-material/Forum';
import "../stylesheets/storycard.css"

const StoryCard = () => {
    return (
        <div className="card" style={{ width: '30rem' }}>
            <div className="card-body">
                <div className="story-header d-flex flex-row justify-content-evenly align-items-center">
                    <h5 className="text-primary border-bottom border-3 border-primary p-2 fs-6">Stories</h5>
                    <h5 className="p-2 fs-6">Reels</h5>
                    <h5 className="p-2 fs-6">Rooms</h5>
                </div>
                <Divider />
                <div className="story-content d-flex flex-row justify-content-between align-items-center">
                    <div className="story-img me-4">
                        <Card
                            sx={{
                                width: '90px'
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="110"
                                image="https://source.unsplash.com/random"
                                alt="green iguana"
                            />
                            <div className="bg-white pt-2" style={{ height: '40px' }}>
                                Create story
                            </div>
                        </Card>
                    </div>
                    <div className="story-text my-4">
                        <div className="story-text-item">
                            <p className="moments">
                                <AssistantIcon className="me-2"/>
                                Share everyday moments with friends and family.
                            </p>
                        </div>
                        <div className="story-text-item">
                            <p className="moments">
                                <AlarmIcon className="me-2"/>
                                Stories disappear after 24 hours.
                            </p>
                        </div>
                        <div className="story-text-item">
                            <p className="moments">
                                <ForumIcon className="me-2"/>
                                Replies and reactions are private.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;