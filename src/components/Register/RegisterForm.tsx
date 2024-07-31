// components/LoginForm.tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import { Button, TextField, Typography, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/apis/firebase/FirebaseConfig';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie"

interface State {
    username: string
    password: string
    showPassword: boolean
}

const RegisterForm: React.FC = () => {
    const router = useRouter();
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

    const handleRegister = async () => {
        try {
            const response = await fetch('/api/register', {
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
                router.push('/login');
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (err: unknown) {
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
            />
            <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
                <OutlinedInput
                    label='Password'
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

            <Button fullWidth size='large' variant='contained' sx={{ marginTop: 7 }} onClick={handleRegister}>
                Register
            </Button>
        </>
    );
};

export default RegisterForm;
