
import querystring from 'query-string';
import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';


import HrFilter from '../../components/hr/HrFilter';
import HrTable from '../../components/hr/HrTable';
import CustomButton from '../../components/form/CustomButton';
import { FormContext } from '../../contexts/FormContext';
import { useQuery } from '../../hooks/useQuery';
import { getUser } from '../../reducks/users/selectors';
import LeadRequest from '../../requests/lead-request';
import { hrResultOption } from '../../constants';
import { getDateFormat } from '../../utils/common';

const List = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [lead, setLead] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const hr_result = searchQuery.get('hr_result');
    const [queries, setQueries] = useState({
        name: searchQuery.get('name') || '',
        email: searchQuery.get('email') || '',
        phone: searchQuery.get('phone') || '',
        hr_calling_recruiter: searchQuery.get('hr_calling_recruiter') || '',
        hr_date_of_calling: searchQuery.get('hr_date_of_calling') || null,
        hr_interview_status: searchQuery.get('hr_interview_status') || '',
        hr_interview_date: searchQuery.get('hr_interview_date') || null,
        hr_result: hr_result ? hrResultOption.filter(s => hr_result.split(',').includes(s.key)) : [],
    });
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,


            page
        };
        history.replace({
            pathname: 'hr',
            search: querystring.stringify(queriesObject, { skipEmptyString: true, skipNull: true })
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
    
    const onChangeDate = (value, name) => {
        setQueries(prev => ({
            ...prev,
            [name]: getDateFormat({date: value, isDateTime: false})
        }));
    };

 
    const submitSearch = () => {
        setIsLoading(true);
        setPage(1);
        const queriesObject = handleQueryString({ page: 1 });
        LeadRequest.index(queriesObject).then(response => {
            setLead(response);
            setIsLoading(false);
        });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setPage(1);
        LeadRequest.index({ page }).then(response => {
            setLead(response);
            setIsLoading(false);
        });
        setQueries({
            hr_calling_recruiter:'',
            hr_date_of_calling: null,
            hr_interview_status:  '',
            hr_interview_date:  null,
            hr_result:  '',
        });
        history.replace('/hr');
    };

    useEffect(() => {
        let isSubscribed = true;
        LeadRequest.index({
            ...queries,

            page
        }).then(response => {
            if (isSubscribed) {
                setLead(response);
                setIsLoading(false);
            }
        });
        return () => (isSubscribed = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <>
            <FormContext.Provider
                value={{
                    clearSearch,
                    isLoading,
                    onChangeHandler,
                    queries,
                    onChangeDate,
                    submitSearch
                }}
            >
                <HrFilter />
            </FormContext.Provider>

            <HrTable
                isLoading={isLoading}
                leads={lead}
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default List;
