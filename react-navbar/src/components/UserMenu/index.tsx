import {
    Divider,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material'
import { Logout, Person, Settings } from '@mui/icons-material'
import { AuthInfo } from '@homehub/react-utils'

interface UserMenuProps {
    anchorEl: null | HTMLElement
    onClose: () => void
    authInfo: typeof AuthInfo
    onLogoutClick: () => void
}

const UserMenu = ({
    anchorEl,
    onClose,
    authInfo,
    onLogoutClick,
}: UserMenuProps) => {
    const isMenuOpen = Boolean(anchorEl)

    const menuItems = [
        {
            label: 'Configurações',
            icon: <Settings />,
            onClick: onClose,
        },
        {
            label: 'Perfil',
            icon: <Person />,
            onClick: () =>
                location.replace(`/dashboard/${authInfo.authId}/edit-profile`),
        },
        {
            label: 'Sair',
            icon: <Logout />,
            onClick: onLogoutClick,
            divider: true,
        },
    ]

    return (
        <Menu
            keepMounted
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem
                onClick={onClose}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Typography>
                    {`${authInfo?.firstName ?? ''} ${authInfo?.lastName ?? ''}`}
                </Typography>
                <Typography variant="body2" sx={{ color: '#00000099' }}>
                    {authInfo?.email}
                </Typography>
            </MenuItem>
            <Divider />
            {menuItems.map(({ label, icon, onClick, divider }) => (
                <div key={label}>
                    {divider && <Divider />}
                    <MenuItem onClick={onClick}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText>{label}</ListItemText>
                    </MenuItem>
                </div>
            ))}
        </Menu>
    )
}

export default UserMenu
