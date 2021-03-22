import React from "react";
import Form from "../Login/LoginInput";
import Main from "../../mainPage/components/Main";
import { auth } from "../..";
import Nav from "../../mainPage/components/Nav";
import Footer from "../../mainPage/components/Footer";

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: " ",
      loggedInUser: null,
      signUpEmail: "",
      signUpPassword: "",
    };
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleSignUpEmail = (e) => {
    this.setState({
      signUpEmail: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleSignUpPassword = (e) => {
    this.setState({
      signUpPassword: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.setState({
            loggedInUser: user,
            status: "succeeded"
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  };


  onSignupBtnClick = (e) => {
    e.preventDefault();
    const { signUpEmail: email, signUpPassword: password } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.setState({
          loggedInUser: user,
          status: "succeeded"
        });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  logout = () => {
    auth.logout()
  };
  render() {
    if (this.state.status === "succeeded") {
      return (
          <div > 
          <Nav  email={this.state.email} logout={this.logout}/>,
          <Main  />,
          <Footer />
          </div>
      );
    }
    return (
      <Form
        email={this.state.email}
        signUpEmail={this.state.signUpEmail}
        password={this.state.password}
        signUpPassword={this.state.signUpPassword}
        status={this.state.status}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleLogin={this.handleLogin}
        onSignupBtnClick={this.onSignupBtnClick}
        handleSignUpEmail={this.handleSignUpEmail}
        handleSignUpPassword={this.handleSignUpPassword}
        loggedInUser={this.state.loggedInUser}
        logout={this.logout}
      />
    );
  }
}

export default Login;
