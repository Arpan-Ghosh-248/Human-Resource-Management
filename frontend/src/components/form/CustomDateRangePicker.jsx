import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';

import { getDateFormat } from '../../utils/common';

const CustomDateRangePicker = props => {
    const { endText, onChange, startText, value } = props;
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                startText={startText}
                endText={endText}
                value={value}
                onChange={newValue => {
                    const project_start_date = newValue[0] && getDateFormat({date: newValue[0], isDateTime: false});
                    const project_due_date = newValue[1] && getDateFormat({date: newValue[1], isDateTime: false});
                    onChange(project_start_date, project_due_date);
                }}
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                    </>
                )}
            />
        </LocalizationProvider>
    );
};

CustomDateRangePicker.prototype = {
    startText: PropTypes.string.isRequired,
    endText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CustomDateRangePicker;
