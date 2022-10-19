import { Grid } from '@mui/material';
import querystring from 'query-string';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import VocabularyFilter from '../../components/vocabulary/VocabularyFilter';
import VocabularyTable from '../../components/vocabulary/VocabularyTable';
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
    const vocab_interview_result = searchQuery.get('vocab_interview_result');
    const [queries, setQueries] = useState({
        name: searchQuery.get('name') || '',
        email: searchQuery.get('email') || '',
        phone: searchQuery.get('phone') || '',
        calling_recruiter: searchQuery.get('calling_recruiter') || '',
        date_of_calling: searchQuery.get('date_of_calling') || null,
        years_agreement: searchQuery.get('years_agreement') || '',
        night_shift: searchQuery.get('night_shift') || '',
        liquidated_damage: searchQuery.get('liquidated_damage') || '',
        wfo: searchQuery.get('wfo') || '',
        tutoring: searchQuery.get('tutoring') || '',
        relocate: searchQuery.get('  relocate') || '',
        vocab_interview_status: searchQuery.get('vocab_interview_status') || '',
        vocab_interview_date: searchQuery.get('vocab_interview_date') || null,

        vocab_score: searchQuery.get('vocab_score') || '',
        vocab_interview_result: vocab_interview_result ? vocabResultOption.filter(s => vocab_interview_result.split(',').includes(s.key)) : [],
    });
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,


            page
        };
        history.replace({
            pathname: 'vocabulary',
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
            [name]: getDateFormat({date: value, isDateTime: true})
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
            calling_recruiter:'',
            date_of_calling: null,
            years_agreement:  '',
            night_shift:  '',
            liquidated_damage:  '',
            wfo:  '',
            tutoring:  '',
            relocate:'',
            vocab_interview_status:  '',
            vocab_interview_date:  null,

            vocab_score:  '',
        });
        history.replace('/vocabulary');
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
                <VocabularyFilter />
            </FormContext.Provider>

            <VocabularyTable
                isLoading={isLoading}
                leads={lead}
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default List;
