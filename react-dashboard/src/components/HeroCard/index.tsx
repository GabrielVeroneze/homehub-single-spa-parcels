import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import VisaoGeral from '../../assets/visao-geral.png'

interface HeroCardProps {
    title: string
    subtitle: string
}

const HeroCard = ({ title, subtitle }: HeroCardProps) => {
    return (
        <Card sx={{ backgroundColor: '#FFF3E0' }}>
            <CardContent>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                    gap="2rem"
                >
                    <Box display="flex" flexDirection="column" gap="1rem">
                        <Typography
                            variant="h1"
                            color="#000000DE"
                            fontSize="34px"
                        >
                            {title}
                        </Typography>
                        <Typography color="#000000DE" fontSize="24px">
                            {subtitle}
                        </Typography>
                    </Box>
                    <img src={VisaoGeral} alt="Visão Geral" width={468} />
                </Box>
            </CardContent>
        </Card>
    )
}

export default HeroCard
