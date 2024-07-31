'use client';

import LoginForm from "@/components/Login/LoginForm";
import UpdateForm from "@/components/Main/UpdateForm";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Box, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";



export default async function UpdatePage() {
    const router = useRouter()

    return (
        <Box style={{}}>
            <Button variant="outlined" onClick={() => router.back()}>
                Back
            </Button>
            <Box className='content-center mt-4'>
                <Card sx={{ border: '1px solid blue' }}>
                    <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
                       
                        <Box sx={{ mb: 6 }}>
                            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5, textAlign: 'left' }}>
                                Update User
                            </Typography>
                        </Box>

                        <UpdateForm />

                    </CardContent>
                </Card >
            </Box >
        </Box>
    );
}
