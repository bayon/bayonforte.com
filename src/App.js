import React, { Component } from "react";
//store:
import { Provider } from "react-redux";
import store from "./store";

//layout:
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainNavigationTabs from "./components/mainNavigationTabs";
import Footer from "./components/footer";

import "./App.css";

export default () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <MainNavigationTabs></MainNavigationTabs>
                </Container>
                <Footer></Footer>
            </React.Fragment>
        </MuiThemeProvider>
    </Provider>
);
