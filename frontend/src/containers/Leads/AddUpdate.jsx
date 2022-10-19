import { Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import CustomButton from '../../components/form/CustomButton';
import CustomLoadingButton from '../../components/form/CustomLoadingButton';
import CustomSelect from '../../components/form/CustomSelect';
import CustomTextField from '../../components/form/CustomTextField';
import { leadStateOption, leadStatusOption } from '../../constants';
import CustomDatePicker from '../../components/form/CustomDatePicker';
import LeadRequest from '../../requests/lead-request';
import { useEffect } from 'react';
import leadRequest from '../../requests/lead-request';

const AddUpdate = () => {
    const history = useHistory();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(!!id);
    // const [ setUserOptions] = useState([]);

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
        status: ''
    });

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            LeadRequest.find(id).then(res => {
                setLead({
                    ...res, 
                    name: res.name.length
                    ? res.name
                    : [{ name: ''}]
                });

                setIsLoading(false);
            });
        }
    }, []);

    const onChangeDate = (value, name) => {
        setLead(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnchange = e => {
        const { name, value } = e.target;
        // console.log('zzz',name)
        setLead(prev => ({
            ...prev,
            [name]: value
        }));
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
                {id ? 'Update' : 'Add'} a lead
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
