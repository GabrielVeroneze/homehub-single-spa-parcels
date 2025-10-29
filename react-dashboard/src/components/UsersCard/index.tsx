import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import PersonIcon from '@mui/icons-material/Person'
import UsersIcon from '../../assets/users.png'

const UsersCard = () => {
    const users = ['Usuário 1', 'Usuário 2', 'Usuário 3']

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
                            src={UsersIcon}
                            alt="Ícone de Usuário"
                            width={100}
                        />
                        <Typography
                            variant="h2"
                            color="#E65100"
                            fontSize="24px"
                        >
                            Usuários da família
                        </Typography>
                    </Box>
                    <List sx={{ width: '100%' }}>
                        {users.map((user, index) => (
                            <Box key={index}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PersonIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>{user}</ListItemText>
                                </ListItem>
                                {index < users.length - 1 && <Divider />}
                            </Box>
                        ))}
                    </List>
                </Box>
            </CardContent>
        </Card>
    )
}

export default UsersCard
