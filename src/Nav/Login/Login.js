import Form from "../Login/LoginInput";
import Main from "../../mainPage/components/Main";
import { auth } from "../..";
import Nav from "../../mainPage/components/Nav";
import Footer from "../../mainPage/components/Footer";
import { useState } from "react";

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
//   });

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
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

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedInUser(user);
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

        setLoggedInUser(user);
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
    auth.logout();
  };
  if (status === "succeeded") {
    return (
      <div>
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
