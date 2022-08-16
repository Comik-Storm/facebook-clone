import React from 'react';
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import StoryCard from "../../components/StoryCard";
import PostSender from "../../components/PostSender";
import Sponsored from "../../components/Sponsored";
import "../../stylesheets/home.css"
import Posts from "../../components/Posts";

const Home = () => {
    return (
        <div className="home p-0 m-0">
            <Header/>
            <div className="main-content d-flex flex-row justify-content-center align-items-start">
                <div className="sidebar-main">
                    <Sidebar/>
                </div>
                <div className="feed d-flex flex-column flex-grow-1 justify-content-around align-items-center">
                    <div className="storiesCard mt-4">
                        <StoryCard/>
                    </div>
                    <div className="postCard mt-3">
                        <PostSender/>
                    </div>
                    <div className="posts">
                        <Posts/>
                    </div>
                </div>
                <div className="sponsored-main" style={{height: '100%'}}>
                    <Sponsored/>
                </div>
            </div>
        </div>
    );
};

export default Home;