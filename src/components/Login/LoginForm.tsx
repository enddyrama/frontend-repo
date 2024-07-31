// components/LoginForm.tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import { Button, TextField, Typography, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useRouter } from 'next/navigation'

interface State {
    username: string
    password: string
    showPassword: boolean
}

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)
    const [values, setValues] = useState<State>({
        username: "",
        password: '',
        showPassword: false,
    })
    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
    }
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleLogin = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password
                })
            });

            if (response.ok) {
                router.push('/home');
                setLoading(false)
            } else {
                const data = await response.json();
                setLoading(false)

                alert(data.message);
            }
        } catch (err: unknown) {
            setLoading(false)
            if (err instanceof Error) {
                alert(err.message);
            } else {
                alert("An unknown error occurred");
            }
        }
    };


    return (
        <>
            <TextField
                autoFocus
                fullWidth
                id='username'
                label='Username'
                sx={{ marginBottom: 4 }}
                onChange={handleChange('username')}
                disabled={loading}
            />
            <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
                <OutlinedInput
                    label='Password'
                    disabled={loading}
                    value={values.password}
                    id='auth-login-password'
                    onChange={handleChange('password')}
                    type={values.showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                edge='end'
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                aria-label='toggle password visibility'
                            >
                                {values.showPassword ? <IoEyeOutline /> : <IoEyeOff />
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Button fullWidth size='large' disabled={loading} variant='contained' sx={{ marginTop: 7 }} onClick={handleLogin}>
                Login
            </Button>
        </>
    );
};

export default LoginForm;
