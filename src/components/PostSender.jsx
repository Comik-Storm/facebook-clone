import React from 'react';
import {Avatar, Card, CardContent, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import "../stylesheets/postsender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import {green, orange, red} from "@mui/material/colors";
import {Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import db from "../utils/Firebase";
import firebase from "firebase/compat/app";

const PostSender = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="post-sender">
            <Card
                sx={{
                    width: '30rem',
                }}
            >
                <CardContent>
                    <div className="post-sender-top mb-3 d-flex flex-row justify-content-evenly align-items-center">
                        <Avatar src={user.photoURL}/>
                        <Formik
                            initialValues={{
                                message: '',
                                photo: ''
                            }}
                            onSubmit={ (values, {resetForm}) => {
                                db.collection('posts').add({
                                    message: values.message,
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                    profilePic: user.photoURL,
                                    username: user.displayName,
                                    image: values.photo
                                })
                                resetForm({values: ''})
                            }}>
                            <Form
                                className="flex-grow-1 ms-2 d-flex flex-row justify-content-center align-items-center"
                            >
                                <Field
                                    name="message"
                                    type="text"
                                    placeholder={`What's on your mind, ${user.displayName}`}
                                    className="msg-input flex-grow-1 me-2 py-2"
                                />
                                <Field
                                    name="photo"
                                    type="text"
                                    placeholder="Photo/Video"
                                    className="msg-input py-2 w-25"
                                />
                                <button type="submit" className="d-none">
                                    Submit
                                </button>
                            </Form>
                        </Formik>
                    </div>
                    <Divider sx={{borderBottom: 1}}/>
                    <List className="post-sender-bot mt-3 d-flex flex-row p-0 m-0">
                        <ListItemButton dense={true} sx={{borderRadius: '10px'}} className="live-video px-2 m-0">
                            <ListItemIcon>
                                <VideocamIcon sx={{color: red[600]}}/>
                            </ListItemIcon>
                            <ListItemText primary="Live Video"/>
                        </ListItemButton>
                        <ListItemButton dense={true} sx={{borderRadius: '10px'}} className="photo px-2 m-0">
                            <ListItemIcon>
                                <PhotoLibraryIcon sx={{color: green[600]}}/>
                            </ListItemIcon>
                            <ListItemText primary="Photo/video"/>
                        </ListItemButton>
                        <ListItemButton dense={true} sx={{borderRadius: '10px'}} className="feeling px-2 m-0">
                            <ListItemIcon>
                                <InsertEmoticonOutlinedIcon sx={{color: orange[600]}}/>
                            </ListItemIcon>
                            <ListItemText primary="Feeling/Activity"/>
                        </ListItemButton>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
};

export default PostSender;