import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
//pages:
import TodosPage from "../pages/todosPage";
import HomePage from "../pages/homePage";
import QualificationsPage from "../pages/qualificationsPage";
import SkillsPage from "../pages/skillsPage";
import BabylonPage from "../pages/babylonPage";
import RechartsPage from "../components/recharts/areaChart";
import ChartsPage from "../pages/chartsPage";

//grid
import Grid from "@material-ui/core/Grid";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
///////////////////////////////////////////////
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};
function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        "aria-controls": `scrollable-force-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        color: "#222"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    list: {
        width: 250
    },
    title: {
        display: "block"
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function MainNavigationTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    var mode = "just entered";

    console.log("react version is:")
    console.log(React.version);

    const [isAuthorized, setIsAuthorized] = React.useState(false);
    // Works With Tabs:   {isAuthorized && (  <Tab Destination> )}
    const pressedLogin = () => {
        console.log("pressed login");
        console.log("mode:", mode);
        mode = "pressed login";
        console.log("mode:", mode);
        setIsAuthorized(true);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [state, setState] = React.useState({
        // top: false,
        left: false //,
        //bottom: false,
        //right: false
    });

    const toggleDrawer = (side, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (side) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {["MERN", "MEAN", "LAMP", "LEMP"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {text === "MERN" ? (
                                <a
                                    href={process.env.REACT_APP_HOST}
                                    target="_blank"
                                >
                                    Log In
                                </a>
                            ) : (
                                    <p></p>
                                )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    //dialogs
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    //dialog signup
    const [openDialogSignUp, setOpenSignUpDialog] = React.useState(false);
    const handleSignUpDialogClickOpen = () => {
        setOpenSignUpDialog(true);
    };
    const handleSignUpDialogClose = () => {
        setOpenSignUpDialog(false);
    };
    //dialog login
    const [openDialogLogin, setOpenLoginDialog] = React.useState(false);
    const handleLoginDialogClickOpen = () => {
        //turn off register dialog:
        handleSignUpDialogClose();
        setOpenLoginDialog(true);
    };
    const handleLoginDialogClose = () => {
        setOpenLoginDialog(false);
    };

    /////////////////////////////
    return (
        <div className={classes.root} style={{ marginTop: "90px" }}>
            <Router>
                <AppBar position="fixed">
                    <div className={classes.root}>
                        <Grid
                            container
                            spacing={0}
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid item lg={12}>
                                <Toolbar>
                                    <Grid
                                        container
                                        spacing={0}
                                        direction="row"
                                        justify="flex-start"
                                        alignItems="center"
                                    >
                                        <Grid item lg={1} xs={1}>
                                            <IconButton
                                                edge="start"
                                                className={classes.menuButton}
                                                color="inherit"
                                                aria-label="menu"
                                                onClick={toggleDrawer(
                                                    "left",
                                                    true
                                                )}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            <Drawer
                                                open={state.left}
                                                onClose={toggleDrawer(
                                                    "left",
                                                    false
                                                )}
                                            >
                                                {sideList("left")}
                                            </Drawer>
                                        </Grid>
                                        <Grid item lg={2} xs={6}>
                                            <Typography
                                                variant="h6"
                                                className={classes.title}
                                            >
                                                bayonforte.com
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={2} xs={5}>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                onClick={
                                                    handleSignUpDialogClickOpen
                                                }
                                            >
                                                Sign Up
                                            </Button>
                                        </Grid>
                                        <Grid item lg={7} sm={12} xs={12}>
                                            <Tabs
                                                value={value}
                                                onChange={handleChange}
                                                variant="scrollable"
                                                scrollButtons="on"
                                                aria-label="scrollable auto tabs example"
                                            >
                                                <Tab
                                                    label="home"
                                                    {...a11yProps(0)}
                                                />

                                                <Tab
                                                    label="experience"
                                                    {...a11yProps(1)}
                                                />

                                                <Tab
                                                    label="skills"
                                                    {...a11yProps(2)}
                                                />
                                                <Tab
                                                    label="babylon"
                                                    {...a11yProps(3)}
                                                />
                                                <Tab
                                                    label="recharts"
                                                    {...a11yProps(4)}
                                                />
                                                <Tab
                                                    label="todos"
                                                    {...a11yProps(5)}
                                                />
                                            </Tabs>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </Grid>
                        </Grid>
                    </div>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <HomePage></HomePage>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <QualificationsPage />
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <SkillsPage />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <BabylonPage />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ChartsPage />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <TodosPage />
                </TabPanel>
                <Switch>
                    <Route path="/signup">
                        <p>signup disconnected here.</p>
                    </Route>
                </Switch>

                <Dialog
                    fullScreen={fullScreen}
                    open={openDialogSignUp}
                    onClose={handleSignUpDialogClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title"></DialogTitle>
                    <DialogContent>
                        <Register />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            autoFocus
                            onClick={handleSignUpDialogClose}
                            color="primary"
                        >
                            cancel
                        </Button>
                        <Button
                            onClick={handleLoginDialogClickOpen}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    fullScreen={fullScreen}
                    open={openDialogLogin}
                    onClose={handleLoginDialogClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title"></DialogTitle>
                    <DialogContent>
                        <Login></Login>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            autoFocus
                            onClick={handleLoginDialogClose}
                            color="primary"
                        >
                            cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </Router>
        </div>
    );
}
/*

Signup Dialog Get Request
http://localhost:3000/signup?firstName=asdf&lastName=fdsas&email=ert%40sadfg&password=1234

*/
