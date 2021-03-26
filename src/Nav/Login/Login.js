import Form from "../Login/LoginInput";
import Main from "../../mainPage/components/Main";
import { auth, db } from "../..";
import Nav from "../../mainPage/components/Nav";
import Footer from "../../mainPage/components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../selectors/auth";
import { setLoggedInUser } from "../../actions/auth";

// firebase
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
// });

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const loggedInUser = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpForm, setSignUpForm] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSignUpEmail = (e) => {
    setSignUpEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUpPassword = (e) => {
    setSignUpPassword(e.target.value);
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const currentUserRef = db.collection("users").doc(user.uid)
        currentUserRef.get().then((userInfo) => {
          console.log(userInfo)
          dispatch(setLoggedInUser({
            ...user,
            ...userInfo.data()
          }))
        })
      } else {
        dispatch(setLoggedInUser(user))
      }
      
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setStatus("succeeded");

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const onSignupBtnClick = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        db.collection("users").doc(userCredential.user.id).set({firstName: "asd"})

        setStatus("succeeded");

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  const openSignup = () => {
    setSignUpForm(true);
  };

  const logout = () => {
    auth.signOut();
  };
  
  if (status === "succeeded") {
    return (
      <div>
        <Link to="/" id="logo"></Link>
        <Nav email={email} signUpEmail={signUpEmail} logout={logout} />,
        <Main />,
        <Footer />
        
      </div>
    );
  }
  return (
    <Form
      email={email}
      signUpEmail={signUpEmail}
      password={password}
      signUpPassword={signUpPassword}
      status={status}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
      onSignupBtnClick={onSignupBtnClick}
      handleSignUpEmail={handleSignUpEmail}
      handleSignUpPassword={handleSignUpPassword}
      loggedInUser={loggedInUser}
      openSignup={openSignup}
      signUpForm={signUpForm}
      logout={logout}
    />
  );
}

export default Login;
