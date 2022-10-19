import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import CustomButton from '../form/CustomButton';

export default function CustomDialog(props) {
    const { onClose, onConfirm, isOpen, text } = props;
    const [open, setOpen] = useState(isOpen);

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{text}</DialogTitle>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingBottom: '24px'
                }}
            >
                <CustomButton text="Yes" variant="contained" onClick={onConfirm} />
                <CustomButton text="No" variant="contained" onClick={onClose} />
            </div>
        </Dialog>
    );
}

CustomDialog.propTypes = {
    // onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};
