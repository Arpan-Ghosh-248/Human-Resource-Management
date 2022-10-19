import { Redirect, Route } from 'react-router';

export const PublicRoute = ({ component: Component, token, ...rest }) => {
    // Redirect user to dashboard when user is logged in
    return <Route {...rest} render={props => (token ? <Redirect to="/" /> : <Component {...props} />)} />;
};