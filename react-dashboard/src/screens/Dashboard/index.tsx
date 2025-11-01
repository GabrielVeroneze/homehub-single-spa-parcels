import { Box, Grid } from '@mui/material'
import { checkIsAuthenticated } from '@homehub/react-utils'
import HeroCard from '../../components/HeroCard'
import UsersCard from '../../components/UsersCard'
import WaterCard from '../../components/WaterCard'
import ReminderCard from '../../components/ReminderCard'

const Dashboard = () => {
    const { authInfo } = checkIsAuthenticated()

    const heroCardTitle = `Olá, ${
        !!authInfo?.firstName
            ? `${authInfo?.firstName} ${authInfo?.lastName}`
            : authInfo?.email
    }!`

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
                        title={heroCardTitle}
                        subtitle="Confira as informações da sua casa inteligente!"
                    />
                </Grid>
                <Grid size={4}>
                    <UsersCard />
                </Grid>
                <Grid size={4}>
                    <WaterCard />
                </Grid>
                <Grid size={4}>
                    <ReminderCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard
