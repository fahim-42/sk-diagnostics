import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);
            /* .then(result => {
                const { displayName } = result.user;
                const userDetails = {
                    name: displayName
                };
                setUser(userDetails);
            }).catch(error => {
                console.log(error.message);
            }) */
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const registerUserSignIn = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
            }).catch(error => {
                setError(error.message);
            })
    }

    const loadUserSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
            }).catch(error => {
                setError(error.message);
            })
    }

    const handleRegistration = e => {
        e.preventDefault();

        // console.log('registration done');
        console.log(email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        isLogin ? loadUserSignIn(email, password) : registerUserSignIn(email, password);
    }

    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    const toggleLogin = e => {
        // console.log(e.target.checked);
        setIsLogin(e.target.checked);
    }

    return {
        user,
        email,
        password,
        isLogin,
        error,
        setUser,
        signInUsingGoogle,
        logout,
        registerUserSignIn,
        loadUserSignIn,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin
    }
}

export default useFirebase;