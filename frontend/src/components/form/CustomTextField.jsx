import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

// import PropTypes from 'prop-types';

const CustomTextField = props => {
    const { disabled,label, name, onChange, value, helperText, error, type  } = props;

    return (
        <TextField
            disabled={disabled}
            name={name}
            value={value}
            onChange={onChange}
            label={label}
            variant="outlined"
            fullWidth
            type={type}
            helperText={helperText}
            error={error}
        />
    );
};

CustomTextField.prototype = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};
CustomTextField.defaultProp = {
    type: 'text'
}

export default CustomTextField;
