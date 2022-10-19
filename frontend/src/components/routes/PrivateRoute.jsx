import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({ component: Component, token, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/login" />)} />
    );
};