import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LogIn from "./log-in";
import Register from "./register";

import './../../sass/style.scss';

class LoginOrRegister extends Component
{
    state =
        {
            toLog: false,
            toRegister: false,
            styleLogIn: {},
            styleRegister: {}
        };

    HandleLogInBtn = () =>
    {
      this.setState({
              toLog: true
      })
    };

    EnterLogInBtn = () => {
        this.setState({
            styleLogIn: {background: "#911719"}
        });
    };

    LeaveLogInBtn = () => {
        this.setState({
            styleLogIn: {}
        });
    };

    EnterRegisterBtn = () => {
        this.setState({
            styleRegister: {background: "#911719"}
        });
    };

    LeaveRegisterBtn = () => {
        this.setState({
            styleRegister: {}
        });
    };

    HandleRegisterBtn = () =>
    {
        this.setState({
            toRegister: true
        })
    };

    render() {
        const {toLog, toRegister, styleRegister, styleLogIn} = this.state;
        return(
            <>
                <div className="login-or-register">
                    {toLog && <LogIn/>}
                    {toRegister && <Register/>}
                    {!(toLog || toRegister) &&
                        <>
                    <button className="log-in-btn lor-btn"
                            onClick={this.HandleLogInBtn}
                            onMouseLeave={this.LeaveLogInBtn}
                            style={styleLogIn}
                            onMouseEnter={this.EnterLogInBtn}>LOG IN</button>
                    <button className="register-btn lor-btn"
                            onClick={this.HandleRegisterBtn}
                            onMouseLeave={this.LeaveRegisterBtn}
                            style={styleRegister}
                            onMouseEnter={this.EnterRegisterBtn}>REGISTER</button>
                        </>}
                </div>
            </>
        )
    }
}

export default LoginOrRegister;