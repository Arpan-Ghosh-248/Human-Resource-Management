import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { LOGIN_USER_TOKEN } from '../axios';
import AuthRequest from '../requests/auth-request';
import Copyright from '../components/common/Copyright';
import CustomLoadingButton from '../components/form/CustomLoadingButton';
import KeyIcon from '@mui/icons-material/Key';

const Login = () => {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const initialValues = {
        email: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        AuthRequest.signIn(values)
            .then(response => {
                localStorage.setItem(LOGIN_USER_TOKEN, response.token);
                history.push('/');
            })
            .catch(error => {

                setErrors(error.response.data);
                setIsLoading(false);
            });
    };

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
                    TECH I.S. Human Resource Management
                </Typography>
                <Typography sx={{ mt: 2 }} component="h2" variant="h6">
                    Sign in
                </Typography>
                <Typography variant="h8" color="red">
                    {errors.error ? <span className="error-text">{errors.error}</span> : null}
                </Typography>
                <form onSubmit={onSubmit}>
                    <Box noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={values.email}
                            onChange={handleInputChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleInputChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <CustomLoadingButton
                            fullWidth
                            onClick={onSubmit}
                            loading={isLoading}
                            startIcon={<KeyIcon />}
                            variant="contained"
                            text="Sign In"
                            sx={{ mt: 3, mb: 2 }}
                        />
                    </Box>
                </form>
            </Box>
            <Copyright sx={{ mt: 4, mb: 4 }} />
        </Container>
    );
};

export default Login;
