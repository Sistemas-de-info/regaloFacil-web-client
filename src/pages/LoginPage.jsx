import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory,Link } from "react-router-dom";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				RegaloFacil
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);//
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const  LoginPage = () => {
	const history = useHistory();
	const [form, setForm] = useState({ email: "", password: "" });
	const classes = useStyles();

	const handleSubmit =async (e) => {
		e.preventDefault();
	

	  history.push('mainMenu');
    
   
    // updateNav();
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	return (
		
		<Container component="main" maxWidth="xs">
		<CssBaseline />
		<div className={classes.paper}>
		  <Avatar className={classes.avatar}>
			<LockOutlinedIcon />
		  </Avatar>
		  <Typography component="h1" variant="h5">
			Login Administrador
		  </Typography>
		  <form className={classes.form} noValidate onSubmit={handleSubmit}>
			<TextField
			  variant="outlined"
			  margin="normal"
			  required
			  fullWidth
			  id="email"
			  label="Email Address"
			  name="email"
			  autoComplete="email"
			  onChange={handleChange}
			  autoFocus
			/>
			<TextField
			  variant="outlined"
			  margin="normal"
			  required
			  fullWidth
			  name="password"
			  label="Password"
			  type="password"
			  id="password"
			  onChange={handleChange}
			  autoComplete="current-password"
			/>
			
			<Button
			  type="submit"
			  fullWidth
			  variant="contained"
			  color="primary"
			  className={classes.submit}
			>
			  Sign In
			</Button>
			
		  </form>
		</div>
		<Box mt={8}>
		  <Copyright />
		</Box>
	  </Container>
	);
};

export default LoginPage;
