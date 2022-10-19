import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Stack } from '@mui/material';
import React, { useContext } from 'react';
import {  adminRoleOptions} from '../../constants';
import { FormContext } from '../../contexts/FormContext';
import CustomButton from '../form/CustomButton';
import CustomLoadingButton from '../form/CustomLoadingButton';
import CustomSelect from '../form/CustomSelect';
import CustomTextField from '../form/CustomTextField';

const AdminsFilter = () => {
    const { clearSearch, onChangeHandler, queries, submitSearch, isLoading } = useContext(FormContext);

    return (
        <Paper
            component="form"
            sx={{
                p: 4,
                width: '100%'
            }}
        >
            <Grid container spacing={3}>
            <Grid item xs={2}>
                    <CustomSelect
                        name="role"
                        label="Role"
                        selectedValue={queries.role}
                        options={adminRoleOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomTextField 
                        name="user_name" 
                        label="Name" 
                        value={queries.user_name} 
                        onChange={onChangeHandler} />
                </Grid>
                <Grid item xs={2}>
                    <CustomTextField 
                        name="email" 
                        label="Email" 
                        value={queries.email} 
                        onChange={onChangeHandler} />
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

export default AdminsFilter;
