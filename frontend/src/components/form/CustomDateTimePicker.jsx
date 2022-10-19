import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';

const CustomDateTimePicker = props => {
    const { value, onChange, name, label } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={props => <TextField {...props} />}
                label={label}
                value={value}
                onChange={date => {
                    onChange(new Date(date).toISOString(), name);
                }}
            />
        </LocalizationProvider>
    );
};

CustomDateTimePicker.prototype = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CustomDateTimePicker;
