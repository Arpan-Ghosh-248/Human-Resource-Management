import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormHelperText } from '@mui/material';

const CustomDatePicker = props => {
    const { value, onChange, name, label, helperText, error } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                renderInput={props => <TextField {...props} fullWidth/>}
                label={label}
                value={value}
                onChange= {date => {
                    onChange(date && new Date(date).toISOString(), name);
                }}
            />
            <FormHelperText error={error}>{helperText}</FormHelperText>
        </LocalizationProvider>
    );
};

CustomDatePicker.prototype = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CustomDatePicker;
