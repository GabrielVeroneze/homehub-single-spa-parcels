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
    Typography,
} from '@mui/material'
import DoorIcon from '../../assets/door.png'

const DoorCard = () => {
    const [selectedDoor, setSelectedDoor] = useState({
        door: 'entrada',
        isOpen: false,
    })

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
                            value={selectedDoor.door}
                            label="Porta"
                            onChange={({ target }) =>
                                setSelectedDoor({
                                    ...selectedDoor,
                                    door: target.value.toString(),
                                })
                            }
                        >
                            <MenuItem value="entrada">Entrada</MenuItem>
                            <MenuItem value="serviço">Serviço</MenuItem>
                            <MenuItem value="lateral">Lateral</MenuItem>
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
                            label="Destrancada"
                            size="medium"
                            sx={{ color: '#FFFFFF', bgcolor: '#EF5350' }}
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
                            onClick={() =>
                                setSelectedDoor({
                                    ...selectedDoor,
                                    isOpen: true,
                                })
                            }
                        >
                            Abrir
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#9C27B0',
                            }}
                            onClick={() =>
                                setSelectedDoor({
                                    ...selectedDoor,
                                    isOpen: false,
                                })
                            }
                        >
                            Trancar
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default DoorCard
