import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

export default function AuthExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
                <AuthButton />

                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/signup">
                        <SignUpPage />
                    </Route>
                    <PrivateRoute path="/protected">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    console.log("Private Route: children:", children);
    // console.log("...rest:", ...rest);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Protected</h3>;
}

function SignUpPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in.</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}
