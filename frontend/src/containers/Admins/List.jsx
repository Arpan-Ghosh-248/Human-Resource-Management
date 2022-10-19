import { Grid } from '@mui/material';
import querystring from 'query-string';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import AdminsFilter from '../../components/admins/AdminsFilter';
import AdminsTable from '../../components/admins/AdminsTable';
import CustomButton from '../../components/form/CustomButton';
import { FormContext } from '../../contexts/FormContext';
import { useQuery } from '../../hooks/useQuery';
import { getUser } from '../../reducks/users/selectors';
import AdminsRequest from '../../requests/user-request';

const List = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [admins, setAdmins] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [queries, setQueries] = useState({
        user_name: searchQuery.get('user_name') || '',
        email: searchQuery.get('email') || '',
        role: searchQuery.get('role') || '',
        permission: searchQuery.get('permission') || ''
    });
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,
            page
        };
        history.replace({
            pathname: 'admins',
            search: querystring.stringify(queriesObject, { skipEmptyString: true, skipNull: true })
        });
        AdminsRequest.index(queriesObject).then(response => {
            setAdmins(response);
            setIsLoading(false);
        });
        return queriesObject;
    };

    const handlePageChange = (e, value) => {
        handleQueryString({ page: value });
        setPage(value);
    };

    const onChangeHandler = e => {
        const { value, name } = e.target;

        setQueries({
            ...queries,
            [name]: value
        });
    };

    const submitSearch = () => {
        setIsLoading(true);
        setPage(1);
        const queriesObject = handleQueryString({ page: 1 });
        AdminsRequest.index(queriesObject).then(response => {
            setAdmins(response);
            setIsLoading(false);
        });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setPage(1);
        AdminsRequest.index({ page }).then(response => {
            setAdmins(response);
            setIsLoading(false);
        });
        setQueries({
            user_name: '',
            email: '',
            role: '',
            permission: ''
        });
        history.replace('/admins');
    };

    useEffect(() => {
        let isSubscribed = true;
        AdminsRequest.index({
            ...queries,
            page
        }).then(response => {
            if (isSubscribed) {
                setAdmins(response);
                setIsLoading(false);
            }
        });
        return () => (isSubscribed = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    
    const selector = useSelector(state => state)
    const user = getUser(selector);
    
    return (
        <>
            <FormContext.Provider
                value={{
                    clearSearch,
                    onChangeHandler,
                    queries,
                    isLoading,
                    submitSearch
                }}
            >
                <AdminsFilter />
            </FormContext.Provider>
                
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" mt={3}>
                <CustomButton text="Add an Admin" variant="contained" onClick={() => user.role === ('director')? history.push('/admins/create'):alert('Only Admin can edit')} />
            </Grid>
            <AdminsTable isLoading={isLoading} admins={admins} page={page} handlePageChange={handlePageChange} />
        </>
    );
};

export default List;
