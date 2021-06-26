import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, Grid, Box, Modal, Backdrop, Fade } from "@material-ui/core";
import { AccountCircle, LockRounded, Email } from "@material-ui/icons";
import truck from "../Image/truck1.png"

const useStyles = makeStyles((theme) => ({
    body: {
      display: "flex",
      position : "fixed",
      flexDirection: "column",
      //alignItems: "center",
      backgroundImage: `url(${truck})`,
      backgroundSize : 'cover',
      spacing: 10,
      width : "100vw",
      height : "100vh",
      top : "0%",
      left : "0%",

  },
  box: {
    background: "white",
    //marginTop: "25vh",
    marginLeft: '67vw',
    position : "absolute",
    flexDirection: "column",
    alignItems: "center",
    width: '33vw',
    height: '100vh',
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop:'20vh',
  },
  form: {
    marginTop: theme.spacing(1),
    alignItems: "center",
    minWidth: 300,
    maxWidth: 400,
  },
  button: {
      background: 'linear-gradient(45deg, rgba(255,228,132,1) 0%, rgba(255,202,24,1) 100%)',
  },
 
  textField: {
      //color: 'white',
  },
  registerbutton :  {
                      background : 'linear-gradient(45deg, rgba(255,228,132,1) 0%, rgba(255,202,24,1) 100%)',
                      position : 'inherit',
                      width : '33%',
                      marginTop : theme.spacing(12),
                      right : theme.spacing(10),
                    },
  modal :   {
              display : 'flex',
              padding : theme.spacing(1),
              alignItems : 'center',
              justifyContent : 'center',
            },
  paper : {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            fontSize : '50px',
          },
}));

function Login(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [register,setRegister] = useState(false);
  const rootRef = React.useRef(null);

  const [reusername,setReusername] = useState("");
  const [reemail,setReemail] = useState("");
  const [repassword,setRepassword] = useState("");
  const [reconfirmpassword,setReconfirmpassword] = useState("");

  const [popup,setPopup] = useState(false);
  const handleRegisterUsername = (event) =>{
    setReusername(event.target.value);
  };
  const handleRegisterEmail = (event) =>{
    setReemail(event.target.value);
  };
  const handleRegisterPassword = (event) =>{
    setRepassword(event.target.value);
  };
  const handleRegisterConfirmpassword = (event) =>{
    setReconfirmpassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  function handleRegister(value)
  {
    setRegister(value);
  }
  const handlePasswordChange = (event) => {
    //setIsTyping(true);
    setPassword(event.target.value);
  };

  // handle button click of login form
  const handleSubmit = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:8080/users/login",{
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if(response.data.status === 401)
        {
          setLoading(false);
          setError(response.data.message) ;    
        }
        else
        {
          if(response.data.status === 0)
          {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push("/");
          }
        }
        })
        .catch((error)=>{
          console.log(error.response);
          setError("Something went wrong. Please try again later.");
          setLoading(false);
        });
  };
  const handleClosepopup = () =>{
      setPopup(false);
      setRegister(false);
      setLoading(false);
      props.history.push('/login');
  }
  const handleSubmitRegister = () => {
    var data = {
      reusername : reusername,
      reemail : reemail,
      repassword : repassword,
      reconfirmpassword : reconfirmpassword,

    };
    setError(null);
    setLoading(true);
    axios .post("http://localhost:8080/users/register",data)
          .then ((res) =>
                        {
                          if(res.data.status !== 0)
                          {
                            setLoading(false);
                            setError(res.data.message);
                          }
                          else
                          {
                            setPopup(true);
                          }
                        }
                )
          .catch  ((error) => {
                                setError("Something went wrond.");
                                setLoading(false);
                              }
                  )
  }
  return (
    <div className = {classes.body}>
    <Box
      ///borderRadius={8}
      boxShadow={4}
      borderColor = "white"
      className = {classes.box}
      
    >
      { register !== true ? [
        <Typography component="h1" variant="h4" p = {10}>
          Sign in
        </Typography>,
          <TextField
            className = {classes.textField}
            autoComplete='off'
            variant="outlined"
            margin="normal"
            fullWidth
            id="user"
            label="Username"
            name="user"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            onChange={handleUsernameChange}
            autoFocus
          />,

          <TextField
            className = {classes.textField}
            autoComplete='off'
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
            }}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            />,
            loading === true ? (
              <Button
                disabled={true}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                name = 'Username'
                lable = 'Username'
                id = 'Username'
              >
                <CircularProgress />
                Login
              </Button>
            ) : (
              <Button
                fullWidth
                className = {classes.button}
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
            ),
            <Grid container justify="center">
              <Grid item>
                <Button> Forgot password?</Button>
                <Button onClick = {() => handleRegister(true)}> Register</Button>
              </Grid>
            </Grid>,
            error && <><small style={{ color: 'red' }}>{error}</small><br /></>,<br />,
          ] :
          [
            <Typography component="h1" variant="h4" >
              Register
            </Typography>,
            <TextField
              autoComplete = 'off'
              variant = 'outlined'
              margin = 'normal'
              fullWidth = {true}
              id="reuser"
              label="Username"
              name="User"
              InputProps= {{
                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                          }}
              onChange={handleRegisterUsername}
              autoFocus
            />,
            <TextField
              autoComplete = 'off'
              variant = 'outlined'
              fullWidth = {true}
              id="reemail"
              margin = 'normal'
              label="Email"
              name="Email"
              InputProps= {{
                startAdornment: (
                                  <InputAdornment position="start">
                                    <Email />
                                  </InputAdornment>
                                ),
                          }}
              onChange={handleRegisterEmail}
              autoFocus
            />,
            <TextField
              autoComplete = 'off'
              variant = 'outlined'
              fullWidth = {true}
              margin = 'normal'
              id="repassword"
              label="Password"
              name="Password"
              type="password"
              InputProps= {{
                startAdornment: (
                                  <InputAdornment position="start">
                                    <LockRounded />
                                  </InputAdornment>
                                ),
                          }}
              onChange={handleRegisterPassword}
              autoFocus
            />,
            <TextField
              autoComplete = 'off'
              variant = 'outlined'
              fullWidth = {true}
              margin = 'normal'
              id="reconfirmpassword"
              label="Confirm Password"
              name="ConfirmPassword"
              type="password"
              InputProps= {{
                startAdornment: (
                                  <InputAdornment position="start">
                                    <LockRounded />
                                  </InputAdornment>
                                ),
                          }}
              onChange={handleRegisterConfirmpassword}
              autoFocus
            />,
            loading !== true ?[
              <Button
                className = {classes.cancelbutton}
                type="Cancle"
                variant="contained"
                color="primary"
                onClick={() => handleRegister(false)}
              >
                Cancel
              </Button>,
              <Button
                className = {classes.registerbutton}
                type="Register"
                variant="contained"
                color="primary"
                onClick={handleSubmitRegister}
              >
                Register
              </Button>,
            ]:[
                <Button
                  disabled
                  className = {classes.cancelbutton}
                  type="Cancle"
                  variant="contained"
                  color="primary"
                >
                  Cancel
                </Button>,
                <Button
                  disabled
                  className = {classes.registerbutton}
                  type="Register"
                  variant="contained"
                  color="primary"
                >
                  <CircularProgress />
                  Register
                </Button>,
            ],
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={popup}
              onClose={handleClosepopup}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={ {
                                timeout: 500,
                              }
                            }
            >
              <Fade in={popup}>
                <div className={classes.paper}>
                  <p id="transition-modal-description">Successful</p>
                </div>
              </Fade>
            </Modal>,
            error && <><small style={{ color: 'red' }}>{error}</small><br /></>,<br />,
          ]
        }
    </Box>
    </div>
  );
}

export default withRouter(Login);
