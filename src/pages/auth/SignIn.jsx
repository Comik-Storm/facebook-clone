import React, {useState} from 'react';
import "../../stylesheets/signin.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {Alert, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {authActions} from "../../utils/store/auth-slice";
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../../utils/Firebase";


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const SignIn = () => {
    const [open, setOpen] = useState(false)
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="signIn">
            {
                success && <Alert onClose={() => {
                    setSuccess(false)
                }} severity="success">Account Created Successfully</Alert>
            }
            {
                err !== '' && <Alert onClose={() => {
                    setErr('')
                }} severity="error">{err}</Alert>
            }
            <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center signin-logo">
                    <div className="d-flex flex-column flex-start justify-content-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                            alt="Facebook"
                        />
                        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook"/>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="card signIn-card" style={{width: '30rem'}}>
                        <div className="card-body">
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().required('Email is required').email('Invalid Email'),
                                    password: Yup.string().required('Password is required')
                                })}
                                onSubmit={values => {
                                    signInWithEmailAndPassword(auth, values.email, values.password)
                                        .then((userCredential => {
                                            const user = userCredential.user
                                            dispatch(authActions.setUserStatus({
                                                email: user.email,
                                                displayName: user.displayName,
                                                photoURL: user.photoURL
                                            }))
                                        }))
                                        .catch(error => {
                                            setErr(error.message)
                                        })
                                }}
                            >
                                <Form className="d-flex flex-column align-items-center justify-content-between">
                                    <Field
                                        type="text"
                                        name="email"
                                        placeholder="Email address"
                                        className="form-control"
                                    />
                                    <span className="text-danger mb-4">
                                        <ErrorMessage name='email'/>
                                    </span>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                    <span className="text-danger mb-4">
                                        <ErrorMessage name='password'/>
                                    </span>
                                    <Button type="submit" variant="contained" className="form-control mb-2">
                                        Log In
                                    </Button>
                                </Form>
                            </Formik>
                            <div className="d-flex flex-column align-items-center justify-content-between">
                                <Button variant="text">
                                    Forgotten Password?
                                </Button>
                                <hr style={{width: '80%'}}/>
                                <Button onClick={handleOpen} variant="contained" color="success">
                                    Create New Account
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="create-page mt-4">
                        <strong>Create a Page</strong> for a celebrity, brand or business.
                    </div>
                </div>
            </div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Sign Up
                    <br/>
                    <span className="fs-6">It's quick and easy.</span>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            password: '',
                            gender: '',
                            profilePic: ''
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().required('Email is required').email('Invalid Email'),
                            password: Yup.string().required('Password is required'),
                            first_name: Yup.string().required('First name is required'),
                            gender: Yup.string().required('Gender is required')
                        })}
                        onSubmit={values => {
                            createUserWithEmailAndPassword(auth, values.email, values.password)
                                .then(() => {
                                    updateProfile(auth.currentUser, {
                                        displayName: `${values.first_name} ${values?.last_name}`,
                                        photoURL: values.profilePic
                                    })
                                        .then(() => {
                                            dispatch(authActions.setUserStatus({
                                                email: values.email,
                                                displayName: auth.currentUser.displayName,
                                                photoURL: auth.currentUser.photoURL
                                            }))
                                            setSuccess(true)
                                        })
                                })
                                .catch(error => {
                                    console.log(error)
                                    setErr(error.message)
                                })
                            setOpen(false)
                        }}
                    >
                        <Form>
                            <div className="row">
                                <div className="col-md-6  m-0 p-0">
                                    <Field
                                        name="first_name"
                                        placeholder="First Name"
                                        className="form-control"
                                    />
                                    <span className="text-danger"><ErrorMessage name="first_name"/></span>
                                </div>
                                <div className="col-md-6  m-0 p-0">
                                    <Field
                                        name="last_name"
                                        placeholder="Surname"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <Field
                                    name="profilePic"
                                    placeholder="Profile Image URL"
                                    className="form-control"
                                />
                            </div>
                            <div className="row mt-2">
                                <Field
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                                <span className="text-danger"><ErrorMessage name="email"/></span>
                            </div>
                            <div className="row mt-2">
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="New Password"
                                    className="form-control"
                                />
                                <span className="text-danger"><ErrorMessage name="password"/></span>
                            </div>
                            <div className="row mt-2 px-3">
                                <label>Gender</label>
                                <div className="col-md-4 p-0 m-0">
                                    <label>
                                        <Field
                                            name="gender"
                                            type="radio"
                                            value="Male"
                                            className="me-2 form-check-input"
                                        />
                                        Male
                                    </label>
                                </div>
                                <div className="col-md-4 p-0 m-0">
                                    <label>
                                        <Field
                                            name="gender"
                                            type="radio"
                                            value="Female"
                                            className="me-2 form-check-input"
                                        />
                                        Female
                                    </label>
                                </div>
                                <div className="col-md-4 p-0 m-0">
                                    <label>
                                        <Field
                                            name="gender"
                                            type="radio"
                                            value="Other"
                                            className="me-2 form-check-input"
                                        />
                                        Other
                                    </label>
                                </div>
                                <span className="text-danger"><ErrorMessage name="gender"/></span>
                            </div>
                            <DialogActions className="mt-2">
                                <Button type="submit" autoFocus variant="contained" color="success">
                                    Sign Up
                                </Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
};

export default SignIn;