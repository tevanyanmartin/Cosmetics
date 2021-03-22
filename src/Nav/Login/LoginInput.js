import React from "react";
import InvalidData from "../Login/Invalid";
import "../Login/LoginStyles.css";
import Main from "../../mainPage/components/Main";

class Form extends React.Component {
  render() {
    const {
      email,
      signUpEmail,
      password,
      signUpPassword,
      status,
      handleEmail,
      handlePassword,
      handleLogin,
      onSignupBtnClick,
      handleSignUpEmail,
      handleSignUpPassword,
      loggedInUser
    } = this.props;
    
    return (
      <>
        {status === "succeeded" ? (
          <Main />
        ) : (
          <>
            <div className="input">
              <h1 className="Lib">Log in</h1>
              <form onSubmit={handleLogin}>
                <input
                  className="inputs"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Enter email"
                />
                <input
                  className="inputs"
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter Password"
                  type="password"
                />
                {status === "failed" ? <InvalidData /> : ""}

                <button id="btn">Log in</button>
              </form>

              <h1 className="Lib">Sign up</h1>
              <form onSubmit={onSignupBtnClick}>
                <input
                  className="inputs"
                  value={signUpEmail}
                  onChange={handleSignUpEmail}
                  placeholder="Enter email"
                />
                <input
                  className="inputs"
                  value={signUpPassword}
                  onChange={handleSignUpPassword}
                  placeholder="Enter Password"
                  type="password"
                />
                {status === "failed" ? <InvalidData /> : ""}

                <button id="btn">Sign up</button>
              </form>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Form;
