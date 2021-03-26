import '../../styles/navModules.css'
import React from 'react'
import addUserIcon from '../../Pics/icons/addUser.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login'
import { useCookies } from 'react-cookie';
import Signup from './Signup';
const Menumodules = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['username', 'userImage']);
    const handleLogout = () => {
        removeCookie('username', { path: '/' })
        removeCookie('userImage', { path: '/' })
    }
    let manuUserSeting;
    if (props.cookie.username) {
        manuUserSeting = <div style={{ display: props.changeProfileDisplay }} className='profile-dropdown'>
            <div className='profile-dropdown-contant'>
                <div className='profile-dropdown-info profile-items'>
                    {console.log(cookies)}
                    <span className='profile-dropdown-info-img'><img alt='img' src={cookies.userImage} /></span>
                    <span className='profile-dropdown-info-name'>{props.cookie.username}</span>
                </div>
                <div className='profile-dropdown-logout'><span href='/' onClick={handleLogout} className='profile-dropdown-logout-button'>LogOut</span></div>
            </div>
        </div>
    } else {
        manuUserSeting = <div style={{ display: props.changeProfileDisplay }} className='profile-dropdown'>
            <div className='profile-dropdown-contant'>
                <div className='navbar-loginButtonLink'>
                    <Link id='loginButtonLink' to="/login">Login</Link>
                </div>
                <div className='navbar-createAccountButtonLink'>
                    <span><img src={addUserIcon} alt='img'/></span>
                    <Link id='createAccountButtonLink' to='signup'>Create New Account</Link>
                </div>
            </div>
        </div>
    }
    return (
        <Router>
            {/* <div className='menu-modules'> */}
                {/* <div className='modules-container'> */}

                {/* </div> */}
                <div onClick={props.handleToggle} style={{ display: props.changeProfileDisplay }} className='close-dropDown'></div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            {/* </div> */}
            {manuUserSeting}
        </Router>
    )
}

export default Menumodules

