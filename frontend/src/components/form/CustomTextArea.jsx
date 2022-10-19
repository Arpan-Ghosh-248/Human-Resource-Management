import * as React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function CustomTextarea(props) {
    return (
        <TextareaAutosize
            name={props.name}
            minRows={15}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            style={{ 
                width: "100%",
                padding: "16.5px 14px",
                borderRadius: "4px"
            }}
        />
    );
}

CustomTextarea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

CustomTextarea.defaultProps = {
    placeholder: 'Describe here...'
};