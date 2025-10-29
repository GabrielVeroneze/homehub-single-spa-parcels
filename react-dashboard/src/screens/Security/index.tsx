import { Box, Grid } from '@mui/material'
import HeroCard from '../../components/HeroCard'
import DoorCard from '../../components/DoorCard'

const Security = () => {
    return (
        <Box
            width={2 / 3}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ margin: 'auto' }}
        >
            <Grid
                container
                columnSpacing={3}
                rowSpacing={5}
                sx={{ flexGrow: 1 }}
            >
                <Grid size={12}>
                    <HeroCard
                        title="Segurança"
                        subtitle="Acompanhe a segurança do seu lar em tempo real."
                    />
                </Grid>
                <Grid size={6}>
                    <DoorCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Security
