import React, {useEffect, useState, useContext} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {AuthContext} from '../../App'
import { ToastContainer, toast } from "react-toastify";

import {login} from '../../api/login';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initState = {email: "", password: "", remember: false};

export default function SignIn() {
  const classes = useStyles();
  const [user, setUser] = useState(initState);
  const {setCookie, SetAuth, isAuth} = useContext(AuthContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const res = await login(user);
    console.log(res);

    if(res && res.status === 200){
      if(user.remember){
        setCookie("jwtToken", res.data.jwtToken, {maxAge: 60*60*24*31, path: "/"});
      }else{
        setCookie("jwtToken", res.data.jwtToken, {path: "/"});
      }
      SetAuth(true);
      window.location.replace("/");
    }else{
      setUser(initState);
      toast.error("Wrong password or login");
    }
  };


  useEffect(() => {
    if(isAuth){
      // window.history.back();
    }
  }, [isAuth]);

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} />
        <Typography component="h1" variant="h5"> Sign in </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField value={user.email} onChange={handleChange} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField value={user.password} onChange={handleChange} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
          <FormControlLabel value={user.remember} onChange={handleChange} name="remember" control={<Checkbox value={true} color="primary" />} label="Remember me" />

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >Sign In</Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}