import React from "react";
import Form from "../Login/LoginInput";
import Main from "../../mainPage/components/Main";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: " "
    };
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleLogin = () => {
    if (this.state.email === "kkk" && this.state.password === "111") {
      this.setState({
        status: "succeeded"
      });
    } else {
      this.setState({
        status: "failed"
      });
    }
  };
  logout = () => {
    this.setState({
      status: "",
      email: "",
      password: ""
    });
  };
  render() {
    if (this.state.status === "succeeded") {
      return <Main logout={this.logout} />;
    }
    return (
      <Form
        email={this.state.email}
        password={this.state.password}
        status={this.state.status}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleLogin={this.handleLogin}
      />
    );
  }
}

export default Login;
