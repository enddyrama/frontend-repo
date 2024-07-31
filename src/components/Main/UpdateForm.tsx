// components/UpdateForm.tsx
'use client';
import React, { ChangeEvent, useState } from 'react';
import { Button, TextField, Typography, Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useRouter, useParams } from 'next/navigation'
import { patchFirebaseUser } from '@/apis/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { updateDataFailure, updateDataStart, updateDataSuccess } from '@/store/reducer/data/DataReducer';

interface State {
    name: string
}

const UpdateForm: React.FC = () => {
    const router = useRouter();
    const param = useParams();
    const [values, setValues] = useState<State>({
        name: ""
    })
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.data.loading);

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
    }
    const handleUpdate = async () => {
        dispatch(updateDataStart());

        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: param.uid,
                    name: values.name
                })
            });
            const data = await response.json();
            if (response.ok) {
                dispatch(updateDataSuccess(values.name));
                router.push('/main');
            } else {
                dispatch(updateDataFailure(data.message));
                alert(data.message);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                dispatch(updateDataFailure(err.message));
                alert(err.message);
            } else {
                dispatch(updateDataFailure('An unknown error occurred'));
                alert("An unknown error occurred");
            }
        }
    };


    return (
        <>
            <TextField
                autoFocus
                fullWidth
                id='Display Name'
                label='Display Name'
                sx={{ marginBottom: 4 }}
                onChange={handleChange('name')}
            />


            <Button fullWidth size='large' disabled={loading} variant='contained' sx={{ marginTop: 7 }} onClick={handleUpdate}>
                Update
            </Button>
        </>
    );
};

export default UpdateForm;
