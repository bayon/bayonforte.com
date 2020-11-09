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

import Home from "../Home";
//grid
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
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
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} style={{ marginTop: "60px" }}>
            <AppBar position="fixed">
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item lg={12}>
                            <Toolbar>
                                <Grid container spacing={0}>
                                    <Grid item lg={1}>
                                        <IconButton
                                            edge="start"
                                            className={classes.menuButton}
                                            color="inherit"
                                            aria-label="menu"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item lg={1}>
                                        <Typography
                                            variant="h6"
                                            className={classes.title}
                                        >
                                            bayonforte.com
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="simple tabs example"
                                        >
                                            <Tab
                                                label="Item One"
                                                {...a11yProps(0)}
                                            />
                                            <Tab
                                                label="Item Two"
                                                {...a11yProps(1)}
                                            />
                                            <Tab
                                                label="Item Three"
                                                {...a11yProps(2)}
                                            />
                                        </Tabs>
                                    </Grid>
                                    <Grid item lg={1}>
                                        <Button color="inherit">Login</Button>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </Grid>
                    </Grid>
                </div>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One1
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three3
            </TabPanel>
        </div>
    );
}
/*
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

 <div className={classes.root}>
            <Grid container spacing={3}>
 <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
</div>
*/
