import { useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    MobileStepper,
    Slider,
    Snackbar,
    Typography,
} from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const marks = [
    {
        value: 16,
        label: '16°C',
    },
    {
        value: 27,
        label: '27°C',
    },
]

const valuetext = (value: number) => {
    return `${value}°C`
}

const AirConditionerCard = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [isOn, setIsOn] = useState<boolean>(true)
    const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false)

    const maxSteps = 4

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <Card sx={{ backgroundColor: '#F5F5F5', height: '100%' }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    px: 2,
                    py: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography>Sala de TV</Typography>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            color: '#9C27B0',
                            borderColor: '#9C27B0',
                            width: 120,
                        }}
                        onClick={() => {
                            setIsOn(!isOn)
                            setIsSnackbarVisible(true)
                        }}
                    >
                        {isOn ? 'Desligar' : 'Ligar'}
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography>Temperatura</Typography>
                    <Typography sx={{ fontSize: 34, lineHeight: 1.24, mb: 2 }}>
                        23º
                    </Typography>
                    <Slider
                        defaultValue={20}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        marks={marks}
                        min={16}
                        max={27}
                        size="medium"
                        sx={{
                            color: '#E65100',
                            '& .MuiSlider-markLabel[data-index="0"]': {
                                transform: 'translateX(0)',
                            },
                            '& .MuiSlider-markLabel[data-index="1"]': {
                                transform: 'translateX(-100%)',
                            },
                        }}
                    />
                </Box>
                <Box>
                    <MobileStepper
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        sx={{
                            fontFamily: 'Roboto',
                            bgcolor: 'transparent',
                            px: 0,
                            py: 0.75,
                            mt: 2,
                        }}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                                sx={{ color: '#9C27B0' }}
                            >
                                próximo
                                <KeyboardArrowRight />
                            </Button>
                        }
                        backButton={
                            <Button
                                size="small"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                                sx={{ color: '#9C27B0' }}
                            >
                                <KeyboardArrowLeft />
                                voltar
                            </Button>
                        }
                    />
                </Box>
            </CardContent>
            {isSnackbarVisible && (
                <Snackbar
                    open={isSnackbarVisible}
                    autoHideDuration={2000}
                    onClose={() => setIsSnackbarVisible(false)}
                    message={`Ar-condicionado ${isOn ? 'ligado' : 'desligado'}.`}
                />
            )}
        </Card>
    )
}

export default AirConditionerCard
