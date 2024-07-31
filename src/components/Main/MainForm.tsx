// components/LoginForm.tsx
import React, { ChangeEvent, useState } from 'react';
import { Button, TextField, Typography, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/apis/firebase/FirebaseConfig';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { cookies } from 'next/headers';

interface State {
    username: string
    password: string
    showPassword: boolean
}

const MainForm: React.FC = () => {


    return (
        <form noValidate autoComplete='off'>
            
            

            <Button type='submit' fullWidth size='large' variant='contained' sx={{ marginTop: 7 }}>
                Login
            </Button>
        </form>
    );
};

export default MainForm;
