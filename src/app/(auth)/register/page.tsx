'use client';
import LoginForm from "@/components/Login/LoginForm"
import { Box, Card, CardContent, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material"
import { Metadata } from "next"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import { IoEyeOff, IoEyeOutline } from "react-icons/io5"
import Image from "next/image";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/Register/RegisterForm";

// export const metadata: Metadata = {
//     title: "Login"
// }


const RegisterPage = () => {
    const router = useRouter()

    return (
        <div className="h-screen flex md:justify-center md:items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">

            <Box className='content-center'>
                <Card sx={{ border: '1px solid gray' }}>
                    <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>

                        <Box sx={{ mb: 6 }}>
                            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5, textAlign: 'left' }}>
                                Welcome to Ebuddy Assignment
                            </Typography>
                            <Typography variant='body2' sx={{ textAlign: 'left' }}>
                                Register new account or<span onClick={() => router.push("/login")} className="font-bold cursor-pointer text-base"> Click here</span> to sign in to your account
                            </Typography>
                        </Box>
                        <RegisterForm />
                    </CardContent>
                </Card >
            </Box >
        </div >

    )
}

export default RegisterPage