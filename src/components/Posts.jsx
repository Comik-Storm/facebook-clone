import React, {useEffect, useState} from 'react';
import Post from "./Post";
import db from "../utils/Firebase";

const Posts = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            }, error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="posts-page">
            {
                posts && posts.map(item => {
                    return <Post
                        key={item.id}
                        message={item.data.message}
                        username={item.data.username}
                        timestamp={item.data.timestamp}
                        profileImg={item.data.profilePic}
                        photo={item.data.image}
                    />
                })
            }
        </div>
    );
};

export default Posts;