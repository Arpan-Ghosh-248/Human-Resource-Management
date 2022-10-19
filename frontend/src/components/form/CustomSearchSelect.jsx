import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import useStateCallback from '../../hooks/useStateCallback';

const CustomSearchSelect = props => {
    const { disabled,disableClearable,getOptionDisabled, label, onChange, name, availableOptions, selectedValue, onTextChange, helperText, error } = props;
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useStateCallback(false);

    useEffect(() => {
        setOptions(availableOptions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [availableOptions]);

    useEffect(() => {
        if (open && !availableOptions.length) {
            setLoading(true, () => {
                if (onTextChange) {
                    onTextChange().then(() => {
                        setLoading(false);
                    });
                } else {
                    setLoading(false);
                }
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return (
        <Autocomplete
            id="asynchronous-demo"
            name={name}
            open={open}
            disableClearable={disableClearable}
            getOptionDisabled={getOptionDisabled}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            value={selectedValue}
            isOptionEqualToValue={(option, value) => option.key === value.key}
            getOptionLabel={option => option.value}
            options={options}
            loading={loading}
            onChange={(e, data) => {
                onChange(data ? data : { value: '', key: '' }, name);
            }}
            renderInput={params => (
                <TextField
                    {...params}
                    label={label}
                    name={name}
                    disabled={disabled} 
                    helperText={helperText}
                    error={error}
                    onChange={e => {
                        setLoading(true, () => {
                            if (onTextChange) {
                                onTextChange(e).then(() => {
                                    setLoading(false);
                                });
                            } else {
                                setLoading(false);
                            }
                        });
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        )
                    }}
                />
            )}
        />
    );
};

export default CustomSearchSelect;
