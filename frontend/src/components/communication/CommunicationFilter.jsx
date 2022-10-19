import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';

import { FormContext } from '../../contexts/FormContext';
import {
    commGradeOption,
    interviewStatusOption,
    vocabResultOption
} from '../../constants'
import CustomButton from '../form/CustomButton';
import CustomDatePicker from '../form/CustomDatePicker';
import CustomLoadingButton from '../form/CustomLoadingButton';
import CustomDateTimePicker from '../form/CustomDateTimePicker';
import CustomSelect from '../form/CustomSelect';
import CustomTextField from '../form/CustomTextField';


const CommunicationFilter = () => {
    const {
        onChangeDate,

        clearSearch,
        isLoading,
        onChangeHandler,
        queries,
        submitSearch
    } = useContext(FormContext);


   
    return (
        <Paper component="form" sx={{ p: 4, width: '100%' }}>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <CustomSelect
                        name="communication_calling_recruiter"
                        label="Calling Recruiter"
                        value={queries.communication_calling_recruiter}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="communication_date_of_calling"
                        label="Date of Calling"
                        value={queries.communication_date_of_calling}
                        onChange={onChangeDate}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="communication_interview_status"
                        label="Communication Interview Status"
                        selectedValue={queries.communication_interview_status}
                        onChange={onChangeHandler}
                        options={interviewStatusOption}
                    />
                </Grid>
                
            </Grid>
            <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={4}>
                    <CustomDatePicker
                        name="communication_interview_date"
                        label="Communication Interview Date and Time"
                        value={queries.communication_interview_date}
                        onChange={onChangeDate}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <CustomSelect
                        name="communication_grade"
                        label="Communication Grade"
                        selectedValue={queries.communication_grade}
                        onChange={onChangeHandler}
                        options={commGradeOption}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="communication_result"
                        label="Communication Result"
                        selectedValue={queries.communication_result}
                        onChange={onChangeHandler}
                        options={vocabResultOption}
                    />
                </Grid>
               
            </Grid>

           
            
            
                <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={4}>
                    <CustomTextField
                        name="name"
                        label="Name"
                        value= {queries.name}
                        onChange={onChangeHandler}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <CustomTextField
                        name="email"
                        label="Email"
                        value= {queries.email}
                        onChange={onChangeHandler}
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <CustomTextField
                        name="phone"
                        label="Phone Number"
                        value={queries.phone}
                        onChange={onChangeHandler}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }}>
                <Stack spacing={2} direction="row">
                    <CustomLoadingButton
                        onClick={submitSearch}
                        loading={isLoading}
                        startIcon={<SearchIcon />}
                        variant="contained"
                        text="Search"
                    ></CustomLoadingButton>
                    <CustomButton onClick={clearSearch} text="Clear" variant="outlined" />
                </Stack>
            </Grid>
        </Paper>
    );
};

export default CommunicationFilter;
