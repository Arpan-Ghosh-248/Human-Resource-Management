import { Grid } from '@mui/material';
import querystring from 'query-string';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import LeadsFilter from '../../components/leads/LeadsFilter';
import LeadTable from '../../components/leads/LeadsTable';
import CustomButton from '../../components/form/CustomButton';
import { FormContext } from '../../contexts/FormContext';
import { useQuery } from '../../hooks/useQuery';
import { getUser } from '../../reducks/users/selectors';
import LeadRequest from '../../requests/lead-request';

const Lead = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [leads, setLeads] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [queries, setQueries] = useState({
         name : searchQuery.get('name') || '',
         email : searchQuery.get('email') || '',
         phone : searchQuery.get('phone') || '',
         degree : searchQuery.get('degree') || '',
         branch : searchQuery.get('branch') || '',
         year_of_graduation: searchQuery.get('year_of_graduation') || '',
    });
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,
            page
        };
        history.replace({
            pathname: 'leads',
            search: querystring.stringify(queriesObject, { skipEmptyString: true, skipNull: true })
        });
        LeadRequest.index(queriesObject).then(response => {
            setLeads(response);
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
        LeadRequest.index(queriesObject).then(response => {
            setLeads(response);
            setIsLoading(false);
        });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setPage(1);
        LeadRequest.index({ page }).then(response => {
            setLeads(response);
            setIsLoading(false);
        });
        setQueries({
            user_name: '',
            email: '',
            role: '',
            permission: ''
        });
        history.replace('/leads');
    };

    useEffect(() => {
        let isSubscribed = true;
        LeadRequest.index({
            ...queries,
            page
        }).then(response => {
            if (isSubscribed) {
                setLeads(response);
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
                <LeadsFilter />
            </FormContext.Provider>
                
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" mt={3}>
                <CustomButton text="Add an Lead" variant="contained" onClick={() => history.push('/leads/create')} />
            </Grid>
            <LeadTable isLoading={isLoading} leads={leads} page={page} handlePageChange={handlePageChange} />
        </>
    );
};

export default Lead;








