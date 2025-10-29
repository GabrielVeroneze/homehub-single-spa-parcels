import { Box, Container, Typography } from '@mui/material'
import LoginForm from '../LoginForm'
import HomeHubLogo from '../../assets/logo.png'

const LoginBox = () => {
    return (
        <Container maxWidth={false} sx={{ maxWidth: 578 }} disableGutters>
            <Box
                sx={{
                    bgcolor: '#F5F5F5',
                    mt: '10vh',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: 7,
                    pt: 5,
                }}
            >
                <img src={HomeHubLogo} alt="Logotipo do HomeHub" width={266} />
                <Box sx={{ mt: 10, width: '100%' }}>
                    <Typography variant="h5" color="#000000DE">
                        Log In
                    </Typography>
                    <Typography variant="body2" color="#00000099">
                        Insira seus dados para acessar o hub.
                    </Typography>
                </Box>
                <LoginForm />
            </Box>
        </Container>
    )
}

export default LoginBox
