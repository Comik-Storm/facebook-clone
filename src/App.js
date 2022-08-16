import './App.css';
import SignIn from "./pages/auth/SignIn";
import {useDispatch, useSelector} from "react-redux";
import Home from "./pages/main/Home";
import {useEffect} from "react";
import {authActions} from "./utils/store/auth-slice";
import firebase from "firebase/compat/app";

function App() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(authActions.setUserStatus({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }))
            } else {
                dispatch(authActions.setUserStatus(null))
            }
        })
    }, [dispatch])

    return (
        <div className="App">
            {
                !user ? <SignIn/> : <Home/>
            }
        </div>
    );
}

export default App;
