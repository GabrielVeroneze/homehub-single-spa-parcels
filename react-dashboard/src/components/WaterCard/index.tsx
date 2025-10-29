import { Box, Typography } from '@mui/material'
import { pieArcLabelClasses, PieChart } from '@mui/x-charts'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import WaterIcon from '../../assets/water.png'

const WaterCard = () => {
    const pieColors = ['#B800D8', '#2E96FF', '#02B2AF']
    const pieData = [
        { id: 0, value: 45, label: 'Chuveiros' },
        { id: 1, value: 30, label: 'Piscina' },
        { id: 2, value: 25, label: 'Lava e Seca' },
    ]

    return (
        <Card sx={{ backgroundColor: '#F5F5F5', height: '100%' }}>
            <CardContent>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="1.5rem"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="1rem"
                    >
                        <img src={WaterIcon} alt="Ícone de Água" width={100} />
                        <Typography
                            variant="h2"
                            color="#E65100"
                            fontSize="24px"
                        >
                            Gasto de Água
                        </Typography>
                    </Box>
                    <PieChart
                        colors={pieColors}
                        width={200}
                        height={200}
                        series={[
                            {
                                arcLabel: (item) => `${item.value}%`,
                                arcLabelMinAngle: 35,
                                arcLabelRadius: '60%',
                                data: pieData,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: '#ffffff',
                                fontSize: 16,
                            },
                        }}
                    />
                </Box>
            </CardContent>
        </Card>
    )
}

export default WaterCard
