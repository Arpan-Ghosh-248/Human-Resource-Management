import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const CustomButton = props => {
    const { text, variant, onClick } = props;
    return (
        <Button variant={variant} onClick={() => onClick()}>
            {text}
        </Button>
    );
};

CustomButton.propTypes = {
    onClick: PropTypes.func
};

export default CustomButton;
