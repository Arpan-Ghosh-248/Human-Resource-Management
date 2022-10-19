import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CustomSelect = props => {
    const { disabled, options, label, name, onChange, selectedValue, error, helperText } = props;
    return (
        <FormControl fullWidth error={error}>
            <InputLabel id="simple-select">{label}</InputLabel>
            <Select
                disabled={disabled} 
                labelId="simple-select-label" 
                value={selectedValue} 
                name={name} 
                label={label} 
                onChange={onChange}>
                {options.map(o => (
                    <MenuItem key={name + o.key} value={o.key}>
                        {o.value}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>

    );
};

CustomSelect.prototype = {
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string
};

CustomSelect.defaultProps = {
    options: []
};

export default CustomSelect;
