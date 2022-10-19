import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import { LOGIN_USER_TOKEN } from './axios';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { PublicRoute } from './components/routes/PublicRoute';
import Login from './containers/Login';
import Admins from './containers/Admins/List';
import Add from './containers/Admins/AddUpdate';
import Leads from './containers/Leads/List';
import { checkLoginAction } from './reducks/users/actions';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import AuthRequest from './requests/auth-request';
import LeadsAddUpdate from './containers/Leads/AddUpdate';
import VocabularyList from './containers/Vocabulary/List';
import VocabularyListAddUpdate from './containers/Vocabulary/AddUpdate';
import CommunicationList from './containers/Communication/List';
import CommunicationListAddUpdate from './containers/Communication/AddUpdate';
import HrList from './containers/Hr/List';
import HrListAddUpdate from './containers/Hr/AddUpdate';
import OfferedList from './containers/Offered/List';
import OfferedListAddUpdate from './containers/Offered/AddUpdate';

const Router = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem(LOGIN_USER_TOKEN);

    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        if (token) {
            AuthRequest.checkLogin().then(response => {
                dispatch(checkLoginAction(response));
            });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Switch>
            <PublicRoute token={token} component={Login} path={'/login'} exact />
            <PrivateRoute token={token} component={Leads} path={'/leads'} exact />
            <PrivateRoute token={token} component={Admins} path={'/'} exact />
            <PrivateRoute token={token} component={Add} path={'/admins/:action/:id?'} exact />
            <PrivateRoute token={token} component={LeadsAddUpdate} path={'/leads/:action/:id?'} exact />
            <PrivateRoute token={token} component={VocabularyList} path={'/vocabulary'} exact />
            <PrivateRoute token={token} component={VocabularyListAddUpdate} path={'/vocabulary/:action/:id?'} exact />
            <PrivateRoute token={token} component={CommunicationList} path={'/communication'} exact />
            <PrivateRoute token={token} component={CommunicationListAddUpdate} path={'/communication/:action/:id?'} exact />
            <PrivateRoute token={token} component={HrList} path={'/hr'} exact />
            <PrivateRoute token={token} component={HrListAddUpdate} path={'/hr/:action/:id?'} exact />
            <PrivateRoute token={token} component={OfferedList} path={'/offered'} exact />
            <PrivateRoute token={token} component={OfferedListAddUpdate} path={'/offered/:action/:id?'} exact />
        </Switch>
    );
};
export default Router;
