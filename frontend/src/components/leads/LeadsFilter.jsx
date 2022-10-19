import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';

import { FormContext } from '../../contexts/FormContext';

import CustomButton from '../form/CustomButton';
import CustomLoadingButton from '../form/CustomLoadingButton';

import CustomSelect from '../form/CustomSelect';
import CustomTextField from '../form/CustomTextField';


const LeadsFilter = () => {
    const {
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
                    <CustomTextField
                        name="degree"
                        label="Degree"
                        value={queries.degree}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="branch"
                        label="Branch"
                        value={queries.branch}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        name="year_of_graduation"
                        label=" Year of Graduation"
                        value={queries.year_of_graduation}
                        onChange={onChangeHandler}
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

export default LeadsFilter;
