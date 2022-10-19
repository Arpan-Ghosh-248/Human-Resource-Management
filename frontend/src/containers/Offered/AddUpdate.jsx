import { Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import CustomButton from '../../components/form/CustomButton';
import CustomLoadingButton from '../../components/form/CustomLoadingButton';
import CustomSelect from '../../components/form/CustomSelect';
import CustomTextField from '../../components/form/CustomTextField';
import {
    candiadteStatusOption,
    interviewStatusOption,
    vocabResultOption,
    leadStatusOption,
    commGradeOption, 
    hrResultOption,
    offeredStatusOptions,
    joinedStatusOptions
} from '../../constants';
import { leadStateOption } from '../../constants';
import CustomDatePicker from '../../components/form/CustomDatePicker';


import { useEffect } from 'react';
import LeadRequest from '../../requests/lead-request';
import userRequest from '../../requests/user-request';
import CustomSearchSelect from '../../components/form/CustomSearchSelect';
import CustomDateTimePicker from '../../components/form/CustomDateTimePicker';
import CustomTextArea from '../../components/form/CustomTextArea';

const AddUpdate = () => {
    const history = useHistory();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(!!id);
    const [userOptions, setUserOptions] = useState([]);

    const [lead, setLead] = useState({
        name: '',
        email: '',
        date_of_birth: null,
        phone: '',
        current_state: '',
        current_city: '',
        native_state: '',
        native_city: '',
        college: '',
        degree: '',
        branch: '',
        year_of_graduation: '',
        sources: '',
        status: '',
        calling_recruiter: '',
        date_of_calling: '',
        years_agreement: '',
        night_shift: '',
        liquidated_damage: '',
        wfo: '',
        tutoring: '',
        relocate: '',
        vocab_interview_status: '',
        communication_interview_date: '',
        vocab_score: '',
        vocab_interview_result: '',
        communication_calling_recruiter: '',
        communication_interview_status: '',
        communication_date_of_calling: '',
        vocab_interview_date: '',
        communication_grade: '',
        communication_result: '',
        hr_calling_recruiter: { key: '', value: '' },
        hr_date_of_calling: '',
        hr_interview_status: '',
        hr_interview_date: '',
        hr_result: '',
        offered_status: '',
        offered_date_of_joining: '',
        revised_date_of_joining: '',
        follow_by: '',
        joined_status: '',
    });

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            LeadRequest.find(id).then(res => {
                setIsLoading(true);
                setLead(res);
                setIsLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (id) {
            LeadRequest.find(id).then(res => {
                setLead({
                    ...res,

                });

                setIsLoading(false);
                let userOpt = res.user
                    ? [
                          {
                              key: res.user.id,
                              value: res.user.name
                          }
                      ]
                    : [];
                setUserOptions(userOpt);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleOnchange = e => {
        const { name, value } = e.target;
        setLead(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onChangeDate = (value, name) => {
        setLead(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const onChangeSearchSelect = (value, name) => {
        setLead(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const getUsers = async filter => {
        userRequest.index(filter).then(res => {
            let newOptions = res.results.length
                ? res.results.map(option => {
                      return {
                          key: option.id,
                          value: option.name
                      };
                  })
                : [];

            setUserOptions(newOptions);
        });
    };
    const onSubmit = () => {
        setIsLoading(true);
        if (id) {
            LeadRequest.update(id, {
                ...lead,
                name: lead.name
            })
                .then(() => history.goBack())
                .catch(err => {
                    setErrors(err.response.data);
                    setIsLoading(false);
                });
        } else {
            LeadRequest.store({
                ...lead,
                name: lead.name
            })
                .then(() => history.goBack())
                .catch(err => {
                    setErrors(err.response.data);
                    setIsLoading(false);
                });
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom component="div" my={2}>
                Lead
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomTextField
                        label="Name"
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name}
                        value={lead.name}
                        onChange={handleOnchange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        label="Email "
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email}
                        value={lead.email}
                        onChange={handleOnchange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="date_of_birth"
                        label="DOB"
                        error={!!errors.date_of_birth}
                        helperText={errors.date_of_birth}
                        value={lead.date_of_birth}
                        onChange={onChangeDate}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomTextField
                        label="Phone"
                        name="phone"
                        error={!!errors.phone}
                        helperText={errors.phone}
                        value={lead.phone}
                        onChange={handleOnchange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="current_state"
                        error={!!errors.current_state}
                        helperText={errors.current_state}
                        selectedValue={lead.current_state}
                        onChange={handleOnchange}
                        label="Current State"
                        options={leadStateOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="current_city"
                        error={!!errors.current_city}
                        helperText={errors.current_city}
                        value={lead.current_city}
                        onChange={handleOnchange}
                        label="Current City"
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomSelect
                        name="native_state"
                        error={!!errors.native_state}
                        helperText={errors.native_state}
                        selectedValue={lead.native_state}
                        onChange={handleOnchange}
                        label="Native State"
                        options={leadStateOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="native_city"
                        error={!!errors.native_city}
                        helperText={errors.native_city}
                        value={lead.native_city}
                        onChange={handleOnchange}
                        label="Native City"
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="college"
                        error={!!errors.college}
                        helperText={errors.college}
                        value={lead.college}
                        onChange={handleOnchange}
                        label=" College "
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomTextField
                        name="degree"
                        error={!!errors.degree}
                        helperText={errors.degree}
                        value={lead.degree}
                        onChange={handleOnchange}
                        label="Degree"
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="branch"
                        error={!!errors.branch}
                        helperText={errors.branch}
                        value={lead.branch}
                        onChange={handleOnchange}
                        label="Branch"
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="year_of_graduation"
                        error={!!errors.year_of_graduation}
                        helperText={errors.year_of_graduation}
                        value={lead.year_of_graduation}
                        onChange={handleOnchange}
                        label=" Year of Graduation "
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomTextField
                        name="sources"
                        error={!!errors.sources}
                        helperText={errors.sources}
                        value={lead.sources}
                        onChange={handleOnchange}
                        label="Sources"
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="status"
                        error={!!errors.status}
                        helperText={errors.status}
                        selectedValue={lead.status}
                        onChange={handleOnchange}
                        label="Status"
                        options={leadStatusOption}
                    />
                </Grid>
            </Grid>

            <Typography variant="h5" gutterBottom component="div" my={2}>
                 Vocabulary
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomTextField
                        label="Calling Recruiter"
                        name="calling_recruiter"
                        error={!!errors.calling_recruiter}
                        helperText={errors.calling_recruiter}
                        selectedValue={lead.calling_recruiter}
                        onChange={onChangeSearchSelect}
                        onTextChange={e => getUsers({ name: e && e.target.value })}
                        availableOptions={userOptions}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="date_of_calling"
                        label="Date Of Calling"
                        error={!!errors.date_of_calling}
                        helperText={errors.date_of_calling}
                        value={lead.date_of_calling}
                        onChange={onChangeDate}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="years_agreement"
                        error={!!errors.years_agreement}
                        helperText={errors.years_agreement}
                        selectedValue={lead.years_agreement}
                        onChange={handleOnchange}
                        label="2 Years Agreement"
                        options={candiadteStatusOption}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomSelect
                        name="night_shift"
                        error={!!errors.night_shift}
                        helperText={errors.night_shift}
                        selectedValue={lead.night_shift}
                        onChange={handleOnchange}
                        label="Night Shift"
                        options={candiadteStatusOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="liquidated_damage"
                        error={!!errors.liquidated_damage}
                        helperText={errors.liquidated_damage}
                        selectedValue={lead.liquidated_damage}
                        onChange={handleOnchange}
                        label="Liquidated Damage"
                        options={candiadteStatusOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="wfo"
                        error={!!errors.wfo}
                        helperText={errors.wfo}
                        selectedValue={lead.wfo}
                        onChange={handleOnchange}
                        label="WFO"
                        options={candiadteStatusOption}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomSelect
                        name="tutoring"
                        error={!!errors.tutoring}
                        helperText={errors.tutoring}
                        selectedValue={lead.tutoring}
                        onChange={handleOnchange}
                        label="Tutoring"
                        options={candiadteStatusOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="relocate"
                        error={!!errors.relocate}
                        helperText={errors.relocate}
                        selectedValue={lead.relocate}
                        onChange={handleOnchange}
                        label="Relocate"
                        options={candiadteStatusOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="vocab_interview_status"
                        error={!!errors.vocab_interview_status}
                        helperText={errors.vocab_interview_status}
                        selectedValue={lead.vocab_interview_status}
                        onChange={handleOnchange}
                        label="Vocab Interview Status"
                        options={interviewStatusOption}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomDateTimePicker
                        name="vocab_interview_date"
                        label="Vocab Interview Date and Time"
                        error={!!errors.vocab_interview_date}
                        helperText={errors.vocab_interview_date}
                        value={lead.vocab_interview_date}
                        onChange={onChangeDate}
                    />
                </Grid>

                <Grid item xs={4}>
                    <CustomTextField
                        label="Vocab Score"
                        name="vocab_score"
                        error={!!errors.vocab_score}
                        helperText={errors.vocab_score}
                        value={lead.vocab_score}
                        onChange={handleOnchange}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomSelect
                        name="vocab_interview_result"
                        error={!!errors.vocab_interview_result}
                        helperText={errors.vocab_interview_result}
                        selectedValue={lead.vocab_interview_result}
                        onChange={handleOnchange}
                        label="Vocab Interview Result"
                        options={vocabResultOption}
                    />
                </Grid>
                
            </Grid>

            <Typography variant="h5" gutterBottom component="div" my={2}>
                 Communication
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={4}>
                    <CustomTextField
                        label="Calling Recruiter"
                        name="communication_calling_recruiter"
                        error={!!errors.communication_calling_recruiter}
                        helperText={errors.communication_calling_recruiter}
                        selectedValue={lead.communication_calling_recruiter}
                        onChange={onChangeSearchSelect}
                        onTextChange={e => getUsers({ name: e && e.target.value })}
                        availableOptions={userOptions}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="communication_date_of_calling"
                        label="Date Of Calling"
                        error={!!errors.communication_date_of_calling}
                        helperText={errors.communication_date_of_calling}
                        value={lead.communication_date_of_calling}
                        onChange={onChangeDate}
                    />
                </Grid>
                <Grid item xs={4}>
                <CustomSelect
                        name="communication_interview_status"
                        error={!!errors.communication_interview_status}
                        helperText={errors.communication_interview_status}
                        selectedValue={lead.communication_interview_status}
                        onChange={handleOnchange}
                        label="Communication Interview Status"
                        options={interviewStatusOption}
                    />
                </Grid>
                
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={4}>
                <CustomSelect
                        name="communication_grade"
                        error={!!errors.communication_grade}
                        helperText={errors.communication_grade}
                        selectedValue={lead.communication_grade}
                        onChange={handleOnchange}
                        label="Communication Grade"
                        options={commGradeOption}
                    />
                </Grid>
                <Grid item xs={4}>
                
                    <CustomSelect
                        name="communication_result"
                        error={!!errors.communication_result}
                        helperText={errors.communication_result}
                        selectedValue={lead.communication_result}
                        onChange={handleOnchange}
                        label="Communication Result"
                        options={vocabResultOption}
                    />
                </Grid>
                <Grid item xs={4}>
                
                    <CustomDateTimePicker
                        name="communication_interview_date"
                        label="Communication Interview Date and Time"
                        error={!!errors.communication_interview_date}
                        helperText={errors.communication_interview_date}
                        value={lead.communication_interview_date}
                        onChange={onChangeDate}
                    />
                </Grid>
                
            </Grid>

           


            <Typography variant="h5" gutterBottom component="div" my={2}>
                HR
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={4}>
                    <CustomTextField
                        label="Calling Recruiter"
                        name="hr_calling_recruiter"
                        error={!!errors.hr_calling_recruiter}
                        helperText={errors.hr_calling_recruiter}
                        selectedValue={lead.hr_calling_recruiter}
                        onChange={onChangeSearchSelect}
                        onTextChange={e => getUsers({ name: e && e.target.value })}
                        availableOptions={userOptions}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="hr_date_of_calling"
                        label="Date Of Calling"
                        error={!!errors.hr_date_of_calling}
                        helperText={errors.hr_date_of_calling}
                        value={lead.hr_date_of_calling}
                        onChange={onChangeDate}
                    />
                </Grid>
                <Grid item xs={4}>
                <CustomSelect
                        name="hr_interview_status"
                        error={!!errors.hr_interview_status}
                        helperText={errors.hr_interview_status}
                        selectedValue={lead.hr_interview_status}
                        onChange={handleOnchange}
                        label="HR Interview Status"
                        options={interviewStatusOption}
                    />
                </Grid>
                
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
            
                <Grid item xs={4}>
                
                    <CustomSelect
                        name="hr_result"
                        error={!!errors.hr_result}
                        helperText={errors.hr_result}
                        selectedValue={lead.hr_result}
                        onChange={handleOnchange}
                        label="HR Result"
                        options={hrResultOption}
                    />
                </Grid>
                <Grid item xs={4}>
                
                    <CustomDateTimePicker
                        name="hr_interview_date"
                        label="HR Interview Date and Time"
                        error={!!errors.hr_interview_date}
                        helperText={errors.hr_interview_date}
                        value={lead.hr_interview_date}
                        onChange={onChangeDate}
                    />
                </Grid>
               
            </Grid>

            <Typography variant="h5" gutterBottom component="div" my={2}>
                {id ? 'Update' : 'Add'} a Offered and joined Status
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
            
                <Grid item xs={4}>
                <CustomSelect
                        name="offered_status"
                        error={!!errors.offered_status}
                        helperText={errors.offered_status}
                        selectedValue={lead.offered_status}
                        onChange={handleOnchange}
                        label="Offered Status"
                        options={offeredStatusOptions}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="offered_date_of_joining"
                        label="Date Of Joining"
                        error={!!errors.offered_date_of_joining}
                        helperText={errors.offered_date_of_joining}
                        value={lead.offered_date_of_joining}
                        onChange={onChangeDate}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="revised_date_of_joining"
                        label="Revised Date Of Joining"
                        error={!!errors.revised_date_of_joining}
                        helperText={errors.revised_date_of_joining}
                        value={lead.revised_date_of_joining}
                        onChange={onChangeDate}
                    />
                </Grid>
                
                
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={4}>
                    <CustomTextField
                        label="Follow up By"
                        name="follow_by"
                        error={!!errors.follow_by}
                        helperText={errors.follow_by}
                        selectedValue={lead.follow_by}
                        onChange={onChangeSearchSelect}
                        onTextChange={e => getUsers({ name: e && e.target.value })}
                        availableOptions={userOptions}
                    />
                </Grid>
                <Grid item xs={4}>
                
                    <CustomSelect
                        name="joined_status"
                        error={!!errors.joined_status}
                        helperText={errors.joined_status}
                        selectedValue={lead.joined_status}
                        onChange={handleOnchange}
                        label="Joined Status"
                        options={joinedStatusOptions}
                    />
                </Grid>
                
                <Grid item xs={4}>
                <CustomTextArea
                        label="Review"
                        name="offered_review"
                        error={!!errors.offered_review}
                        helperText={errors.offered_review}
                        value={lead.offered_review}
                        onChange={handleOnchange}
                    />
                </Grid>
            </Grid>
            


            <Stack spacing={2} direction="row">
                <CustomLoadingButton
                    onClick={onSubmit}
                    loading={isLoading}
                    variant="contained"
                    text={id ? 'Update' : 'Add'}
                ></CustomLoadingButton>
                <CustomButton text="Cancel" variant="outlined" onClick={() => history.goBack()} />
            </Stack>
        </>
    );
};

export default AddUpdate;
