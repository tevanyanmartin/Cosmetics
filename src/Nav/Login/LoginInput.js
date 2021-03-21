import React from 'react'
import InvalidData from '../Login/Invalid';
import '../Login/LoginStyles.css'
import Main from '../../mainPage/components/Main';

class Form extends React.Component {
    render() {
      const {
        email,
        password,
        status,
        handleEmail,
        handlePassword,
        handleLogin
      } = this.props;
      return (
        <>
          {status === "succeeded" ? (
            <Main />
          ) : (
            <div className="input">
              <h1 className='Lib'>Library</h1>
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
                {status === "failed" ? < InvalidData/> : ""}
  
                <button id="btn">Log in</button>
              </form>
            </div>
          )}
        </>
      );
    }
} 

export default Form