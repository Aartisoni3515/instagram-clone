import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import inst_img from "../Images/9364675fb26a.svg";
import insta_logo from "../Images/logoinsta.png";
import fb from "../Images/fb.png";
import appstore from "../Images/app.png";
import playstore from "../Images/play.png";
import "./LoginPage.css";
import SignUp from "../SignUp/SignUp";
import SignIN from "../SignIn/SignIn"

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }
  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img className="inst-img" src={inst_img} width="450px" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage__logo" src={insta_logo} />
                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIN /> : <SignUp />}

                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>

                    <div className="login__fb">
                      <img
                        src={fb}
                        width="15px"
                        style={{ marginRight: "5px"}}
                      />
                      Log in with Facebook
                    </div>
                    <div className="login_forgt"> Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ? (
                    <div className="loginPage__signin">
                      Don't have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{
                          fontWeight: "bold",
                          color: "#0395F6",
                          cursor: "pointer",
                        }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginPage__signup">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" , cursor:"pointer"}}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>

                <div className="loginPage__downloadSection">
                  <div>Get the app.</div>
                  <div className="loginPage__option">
                    <img
                      className="loginPage_dwimg"
                      src={appstore}
                      width="136px"
                    />
                    <img
                      className="loginPage_dwimg"
                      src={playstore}
                      width="136px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
