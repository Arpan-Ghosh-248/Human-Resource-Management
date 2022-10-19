
import querystring from 'query-string';
import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';

import CommunicationFilter from '../../components/communication/CommunicationFilter';
import CommunicationTable from '../../components/communication/CommunicationTable';

import CustomButton from '../../components/form/CustomButton';
import { FormContext } from '../../contexts/FormContext';
import { useQuery } from '../../hooks/useQuery';
import { getUser } from '../../reducks/users/selectors';
import LeadRequest from '../../requests/lead-request';
import { vocabResultOption } from '../../constants';
import { getDateFormat } from '../../utils/common';

const List = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [lead, setLead] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const communication_result = searchQuery.get('communication_result');
    const [queries, setQueries] = useState({
        name: searchQuery.get('name') || '',
        email: searchQuery.get('email') || '',
        phone: searchQuery.get('phone') || '',
        communication_calling_recruiter: searchQuery.get('communication_calling_recruiter') || '',
        communication_date_of_calling: searchQuery.get('communication_date_of_calling') || null,
        communication_interview_status: searchQuery.get('communication_interview_status') || '',
        communication_interview_date: searchQuery.get('communication_interview_date') || null,

        communication_grade: searchQuery.get('communication_grade') || '',
        communication_result: communication_result ? vocabResultOption.filter(s => communication_result.split(',').includes(s.key)) : [],
    });
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,


            page
        };
        history.replace({
            pathname: 'communication',
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
            communication_calling_recruiter:'',
            communication_date_of_calling: null,
            communication_interview_status:  '',
            communication_interview_date:  null,

            communication_grade:  '',
            communication_result:  '',
        });
        history.replace('/communication');
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
                <CommunicationFilter />
            </FormContext.Provider>

            <CommunicationTable
                isLoading={isLoading}
                leads={lead}
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default List;
