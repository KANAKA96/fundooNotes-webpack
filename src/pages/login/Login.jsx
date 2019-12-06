import React from "react";
// import './login.less'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { border } from "@material-ui/system";
import { Card, Button } from "@material-ui/core";
import { blue400 } from "material-ui/styles/colors";
import { green300 } from "material-ui/styles/colors";
import { yellow400 } from "material-ui/styles/colors";
import { purple400 } from "material-ui/styles/colors";
import { indigo400 } from "material-ui/styles/colors";
import { purple500 } from "material-ui/styles/colors";
import { login } from "../../services/userService";
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        overflow: "hidden",
        width: "59%",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "baseline",
        alignItems: "center",
        marginTop: "6%",
        height: "70%"
      }
    },
    MuiPaper: {
      elevation1: {
        "box-shadow": "0px 1px 3px 0px rgba(0,0,0,0), 0px 1px 1px 0px rgba(0,0,0,0), 0px 2px 1px -1px rgba(0,0,0,0)"
      }
    },
    MuiPaper: {
      root: {
        color: "rgba(31, 52, 169, 0.87)",
        transition: "box-shadow 300ms cubic-bezier(0, 0, 0, 0) 0ms",
        backgroundColor: "#fffdfd"
      }
    }
  }
})
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      openSnackBar: false,
      snackBarMessage: ""
    }
  }

  password(e) {
    var password = e.target.value;
    this.setState({ password: password })
  }
  email(e) {
    var email = e.target.value;
    this.setState({ email: email })
  }
  handleSnackClose() {
    try {
      this.setState({
        openSnackBar: false
      })
    } catch (err) {
      console.log("error at handleSnackClose in login");
    }
  }
  handleEnter(event) {
    try {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.handleLogin(event);
      }
    } catch (err) {
      console.log("error at handleEnter in registration");
    }
  }
  handleForgotPassword(){
    this.props.history.push('/resetpassword')
  }

  handleLogin() {
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "enter valid email address"
      });
    }

    else if (this.state.password === "") {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "password cannot be empty..!"
      });
    }
    else {
      var data = {
        'email': this.state.email,
        'password': this.state.password
      }
      login(data)
        .then((response) => {
          console.log("response login", response.data.id);
          localStorage.setItem('user',this.state.email)
          localStorage.setItem('token', response.data.id)
          this.props.history.push('/dashboard')
        })
        .catch((err) => {
          console.log("err", err);
        })
    }
  }
  handleRegister(){
    this.props.history.push('/register')
  }
  render() {
    return (
      <div className="loginForm"
      style={{
        display: "flex",
        "justify-content": "center", width: "100%", height: "80%"
      }}
      >
        <MuiThemeProvider theme={theme}>
          <Card>
          <div>
            <h1>
              <span style={{
                color: blue400
              }}>F</span>
              <span style={{
                color: green300
              }}>U</span>
              <span style={{
                color: yellow400
              }}>N</span>
              <span style={{
                color: purple400
              }}>D</span>
              <span style={{
                color: indigo400
              }}>O</span>
              <span style={{
                color: purple500
              }}>O</span>
            </h1>
          </div>
          <div>
            <h2>Fundoo Login</h2>
          </div>
          <div >
            <TextField
              label="Email"
              value={this.state.email}
              margin="normal"
              variant="outlined"
              onKeyPress={this.handleEnter}
              onChange={(e) => this.email(e)}
            />
          </div>
          <div >
            <TextField
              variant="outlined"
              label="Password"
              value={this.state.password}
              // onChange={this.handleChange('password')}
              onKeyPress={this.handleEnter}
              onChange={(e) => this.password(e)}
            />
            <IconButton
              aria-label="Toggle password visibility"
            // onClick={this.handleClickShowPassword}
            >
              {/* {this.state.showPassword ? <Visibility /> : <VisibilityOff />} */}
            </IconButton>
          </div>
          {/* <div>
                Use 6 or more characters
                </div> */}
          <div>
            <Button onClick={(event) => this.handleLogin(event)}>Login</Button>
            <Button onClick={(event)=>this.handleRegister(event)}>Register</Button>
            <Button onClick={(event)=>this.handleForgotPassword(event)}>ForgotPassword</Button>
          </div>
          </Card>
          </MuiThemeProvider>
     

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.openSnackBar}
          autoHideDuration={1000}
          onClose={this.handleSnackClose}
          variant="error"
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id"> {this.state.snackBarMessage} </span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />


      </div>
    )
  }
}
//  style={
//    border:15
//  }
export default Login;

