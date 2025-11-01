import { useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    Typography,
} from '@mui/material'
import DoorIcon from '../../assets/door.png'

const DoorCard = () => {
    const [doors, setDoors] = useState({
        entrada: false,
        serviço: false,
        lateral: false,
        garagem: false,
    })

    const [selectedDoor, setSelectedDoor] = useState('entrada')
    const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false)

    const handleDoorAction = (isOpen: boolean) => {
        setDoors((prev) => ({
            ...prev,
            [selectedDoor]: isOpen,
        }))
        setIsSnackbarVisible(true)
    }

    const currentIsOpen = doors[selectedDoor]

    return (
        <Card sx={{ backgroundColor: '#F5F5F5', height: '100%' }}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        mx: 'auto',
                        width: 'min-content',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ color: '#E65100', fontSize: 24 }}
                    >
                        Portas
                    </Typography>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="simple-select-label">Porta</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            value={selectedDoor}
                            label="Porta"
                            onChange={({ target }) =>
                                setSelectedDoor(target.value.toString())
                            }
                        >
                            <MenuItem value="entrada">Entrada</MenuItem>
                            <MenuItem value="serviço">Serviço</MenuItem>
                            <MenuItem value="lateral">Lateral</MenuItem>
                            <MenuItem value="garagem">Garagem</MenuItem>
                        </Select>
                    </FormControl>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <img src={DoorIcon} alt="Ícone de Porta" width={100} />
                        <Chip
                            label={currentIsOpen ? 'Destrancada' : 'Trancada'}
                            size="medium"
                            sx={{
                                color: '#FFFFFF',
                                bgcolor: '#EF5350',
                                width: 100,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: 3,
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                color: '#00000061',
                                borderColor: '#0000001F',
                                bgcolor: 'transparent',
                            }}
                            onClick={() => handleDoorAction(true)}
                        >
                            Abrir
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#9C27B0',
                            }}
                            onClick={() => handleDoorAction(false)}
                        >
                            Trancar
                        </Button>
                    </Box>
                </Box>
            </CardContent>
            {isSnackbarVisible && (
                <Snackbar
                    open={isSnackbarVisible}
                    autoHideDuration={2000}
                    onClose={() => setIsSnackbarVisible(false)}
                    message={`Porta ${selectedDoor} ${
                        currentIsOpen ? 'aberta' : 'trancada'
                    }.`}
                />
            )}
        </Card>
    )
}

export default DoorCard
