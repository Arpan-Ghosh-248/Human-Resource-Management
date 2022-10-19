import React from 'react';
import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const CustomLoadingButton = props => {
    const { text, variant, onClick, loading, startIcon, fullWidth, sx, type } = props;
    return (
        <LoadingButton
            fullWidth={fullWidth}
            loading={loading}
            loadingPosition="start"
            startIcon={startIcon}
            variant={variant}
            onClick={onClick}
            sx={sx}
            type={type}
        >
            {text}
        </LoadingButton>
    );
};

CustomLoadingButton.propTypes = {
    onClick: PropTypes.func
};

CustomLoadingButton.defaultProps = {
    type: 'button',
    startIcon: <SaveIcon />,
    fullWidth: false
};

export default CustomLoadingButton;
