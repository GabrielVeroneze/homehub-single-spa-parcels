import {
    Box,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material'
import LightBulbIcon from '../../assets/light-bulb.png'

const ReminderCard = () => {
    const reminders = [
        'Revisar e priorizar tarefas do dia',
        'Atualizar documentação do projeto',
        'Fazer backup dos arquivos importantes',
        'Atualizar perfil profissional online',
    ]

    return (
        <Card sx={{ backgroundColor: '#F5F5F5', height: '100%' }}>
            <CardContent>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="1rem"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="1rem"
                    >
                        <img
                            src={LightBulbIcon}
                            alt="Ícone de Lâmpada"
                            width={100}
                        />
                        <Typography
                            variant="h2"
                            color="#E65100"
                            fontSize="24px"
                        >
                            Lembretes
                        </Typography>
                    </Box>
                    <List sx={{ width: '100%' }}>
                        {reminders.map((reminder, index) => (
                            <Box key={index}>
                                <ListItem>
                                    <ListItemText>{reminder}</ListItemText>
                                </ListItem>
                                {index < reminders.length - 1 && <Divider />}
                            </Box>
                        ))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ReminderCard
