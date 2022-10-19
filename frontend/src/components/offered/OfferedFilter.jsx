import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';

import { FormContext } from '../../contexts/FormContext';
import {
    offeredStatusOptions,
    joinedStatusOptions
} from '../../constants'
import CustomButton from '../form/CustomButton';
import CustomDatePicker from '../form/CustomDatePicker';
import CustomLoadingButton from '../form/CustomLoadingButton';
import CustomDateTimePicker from '../form/CustomDateTimePicker';
import CustomSelect from '../form/CustomSelect';
import CustomTextField from '../form/CustomTextField';


const OfferedFilter = () => {
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
                        name="offered_status"
                        label="Offer Letter Status"
                        selectedValue={queries.offered_status}
                        onChange={onChangeHandler}
                        options={offeredStatusOptions}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomDatePicker
                        name="offered_date_of_joining"
                        label="Date of Joining"
                        value={queries.offered_date_of_joining}
                        onChange={onChangeDate}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="follow_by"
                        label="Follow up By"
                        value={queries.follow_by}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomSelect
                        name="joined_status"
                        label="Joined Status"
                        selectedValue={queries.joined_status}
                        onChange={onChangeHandler}
                        options={joinedStatusOptions}
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

export default OfferedFilter;
