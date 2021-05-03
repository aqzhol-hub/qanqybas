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

import {registration} from '../../api/login';
import {AuthContext} from '../../App';

import { ToastContainer, toast } from "react-toastify";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initState = {email: "", firstname: "", lastname:"", password: ""};

export default function SignUp() {
  const classes = useStyles();
  const [user, setUser] = useState(initState);
  const {isAuth} = useContext(AuthContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const res = await registration(user);
    
    if(res && res.status === 200){
      toast.success("Registration success");
      window.location.replace("/login");
    }else{
      setUser(initState);
      toast.error("User already exists");
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
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField value={user.firstname} onChange={handleChange} autoComplete="fname" name="firstname" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField value={user.lastname} onChange={handleChange} variant="outlined" required fullWidth id="lastname" label="Last Name" name="lastname" autoComplete="lname" />
            </Grid>

            <Grid item xs={12}>
              <TextField value={user.email} onChange={handleChange} variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>

            <Grid item xs={12}>
              <TextField value={user.password} onChange={handleChange} variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I've read license agreement" />
            </Grid>

          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign Up</Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}