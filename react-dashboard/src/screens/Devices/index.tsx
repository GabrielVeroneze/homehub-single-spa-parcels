import { Box, Grid, Typography } from '@mui/material'
import HeroCard from '../../components/HeroCard'
import AirConditionerCard from '../../components/AirConditionerCard'
import AirConditionerIcon from '../../assets/air-conditioner.png'

const Devices = () => {
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
            <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                <Grid size={12}>
                    <HeroCard
                        title="Dispositivos"
                        subtitle="Controle seus dispositivos de perto ou de longe!"
                    />
                </Grid>
                <Grid size={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        <img
                            src={AirConditionerIcon}
                            alt="Ícone de Ar Condicionado"
                            width={100}
                        />
                        <Typography
                            variant="h2"
                            sx={{ color: '#E65100', fontSize: 24 }}
                        >
                            Ar Condicionado
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={4}>
                    <AirConditionerCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Devices
