import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AuthExample from "./auth";
import Todos from "./Todos";

import Home from "../Home";

//Routing:
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Router>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            bayonforte.com
                        </Typography>

                        <Link to="/Todo">Todo</Link>
                        <Link to="/Auth">Auth</Link>
                        <Link to="/topics">Topics</Link>

                        <Switch>
                            <Route path="/Todo"></Route>
                            <Route path="/auth">
                                <Auth />
                            </Route>
                        </Switch>

                        <Button color="inherit">Login</Button>
                    </Router>
                </Toolbar>
            </AppBar>
        </div>
    );
    function DoToDo() {
        return <Home />;
    }
    function Auth() {
        return <AuthExample />;
    }
}

/*
 <Route path="/topics">
                                <Topics />
                            </Route>




                             function Topics() {
        let match = useRouteMatch();

        return (
            <div>
                <h2>Topics</h2>

                <Link to={`${match.url}/components`}>Components</Link>

                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>

                ////The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected ////
                <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}
                            */
