import LoginForm from "@/components/Login/LoginForm";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen flex md:justify-center md:items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <Box className='content-center'>
        <Card sx={{ border: '1px solid gray' }}>
          <CardContent sx={{ padding: 10 }}>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5, textAlign: 'left' }}>
                Welcome to Ebuddy Assignment
              </Typography>
              <Typography variant='body2' sx={{ textAlign: 'left' }}>
                Please sign in to your account
              </Typography>
            </Box>
            <LoginForm />
          </CardContent>
        </Card >
      </Box >
    </div>
  );
}
