import { Box, Container } from '@mui/material'
import EditProfileForm from '../../components/EditProfileForm'

const EditProfile = () => {
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
                <EditProfileForm />
            </Box>
        </Container>
    )
}

export default EditProfile
