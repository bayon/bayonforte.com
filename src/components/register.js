import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//
import { requestApiRegistrationSubmitSet } from "../actions";
import { connect } from "react-redux";
import axios from "axios";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="http://bayonforte.com">
                bayonforte.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function Register() {
    //from templates: SignUp
    const classes = useStyles();

    const [isRegistering, setIsRegistering] = React.useState(false);
    const handleRegisterSubmit = () => {
        console.log("handleRegisterSubmit");
        setIsRegistering(true);
        console.log("submitted values:");
        console.log("values:", values);
        //NOTE: definitely have the values ready for http request.
        //this.props.requestApiRegistrationSubmitSet(values);
        registrationCreateUser(values);
    };

    const [values, setValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChangeFirstName = (firstName) => (event) => {
        setValues({ ...values, [firstName]: event.target.value });
    };
    const handleChangeLastName = (lastName) => (event) => {
        setValues({ ...values, [lastName]: event.target.value });
    };
    const handleChangeEmail = (email) => (event) => {
        setValues({ ...values, [email]: event.target.value });
    };
    const handleChangePassword = (password) => (event) => {
        setValues({ ...values, [password]: event.target.value });
    };

    const registrationCreateUser = (values) => {
        console.log("registrationCreateUser");
        //e.preventDefault();
        // let userData = this.state.registeringUser;
        // console.log("DATA 1: userData:", userData);
        const dataPackage = {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            token: "notsetyet"
        };
        console.log("DATA 2: dataPackage:", dataPackage);
        //const endpoint = Config.API.HOST_NAME + "/auth/register";
        //const endpoint = `${K.META_URL}/auth/register`;
        //route
        //const endpoint = `${K.META_URL}/v1/auth/register/`;
        ///users/login
        const endpoint = `http://bayonforte.com:4000/set-registrationSubmit`;
        //console.log("DATA 3: endpoint:", endpoint);
        axios
            .post(endpoint, {
                email: dataPackage.email,
                password: dataPackage.password,
                firstName: dataPackage.firstName,
                lastName: dataPackage.lastName
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log("success");
                    alert("Success!");
                } else {
                    console.log("FAIL need to set up err handler.");
                    alert("fail");
                }
            });

        ///////////
        /* fetch(endpoint, {
            method: "POST",
            body: JSON.stringify(dataPackage),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((response) => {
            response.json().then((data) => {
                console.log("DATA 4: response data:", data);
                if (data.token != "" && data.token != "undefined") {
                    localStorage.setItem("token", data.token);
                    console.log("STORED TOKEN:", data.token);
                    // console.log("what is this:", this);
                    // this.registrationCreateClient(data.token);
                    //SUCCESSFUL REGISTRATION: continue to app. push
                    this.props.history.push("/main");
                } else {
                    alert("It appears as though that email is already in use!");
                }
            });
        });*/
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={handleChangeFirstName("firstName")}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={handleChangeLastName("lastName")}
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={handleChangeEmail("email")}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleChangePassword("password")}
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleRegisterSubmit}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    // bindActionCreators({ requestApiRegistrationSubmitSet }, dispatch);
    console.log("bindActionCreators was NOT DEFINED? ");
export default connect(mapStateToProps, mapDispatchToProps)(Register);
/*
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `token`) VALUES (NULL, 'joe', 'sixpack', 'joe@sixpack.com', 'password123', '');




/*
import { requestApiRegistrationSubmit } from "../actions";
 componentDidMount() {
        //# api:
        this.props.requestApiRegistrationSubmit();
    }
in render->return->  data={this.props.data.result} 
const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ requestApiRegistrationSubmit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);



./src/components/register.js
  Line 178:5:   'bindActionCreators' is not defined  no-undef
  Line 179:61:  'Registration' is not defined  

*/
