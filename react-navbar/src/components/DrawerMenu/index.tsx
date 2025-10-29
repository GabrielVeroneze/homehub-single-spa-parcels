import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { Lock, Settings, SpaceDashboard, Wifi } from '@mui/icons-material'

const drawerItems = [
    {
        label: 'Visão geral',
        icon: <SpaceDashboard />,
        path: (id: string) => `/dashboard/${id}/`,
    },
    {
        label: 'Dispositivos',
        icon: <Wifi />,
        path: (id: string) => `/dashboard/${id}/devices`,
    },
    {
        label: 'Segurança',
        icon: <Lock />,
        path: (id: string) => `/dashboard/${id}/security`,
    },
    { label: 'Configurações', icon: <Settings /> },
]

interface DrawerMenuProps {
    authId: string
    onClose: () => void
}

const DrawerMenu = ({ authId, onClose }: DrawerMenuProps) => {
    return (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <List>
                {drawerItems.map(({ label, icon, path }) => (
                    <ListItem
                        key={label}
                        disablePadding
                        onClick={() => path && location.replace(path(authId))}
                    >
                        <ListItemButton>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>{label}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default DrawerMenu
