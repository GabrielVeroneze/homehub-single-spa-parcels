import { useEffect, useState } from 'react'
import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from '@mui/material'
import { AccountCircle, Notifications } from '@mui/icons-material'
import {
    AuthInfo,
    checkIsAuthenticated,
    logoutFunction,
} from '@homehub/react-utils'
import Parcel from 'single-spa-react/parcel'
import DrawerMenu from './components/DrawerMenu'
import UserMenu from './components/UserMenu'
import HomeHubLogo from './assets/home-hub.png'

const App = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
    const [authInfo, setAuthInfo] = useState<typeof AuthInfo>()
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        const { authInfo: authObj, isAuthenticated } = checkIsAuthenticated()

        if (!isAuthenticated) {
            return location.replace('/')
        }

        setAuthInfo(authObj)
    }, [])

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const closeMenu = () => setAnchorEl(null)

    const logout = () => {
        setIsVisible(false)
        logoutFunction()
    }

    return (
        <div id="single-spa-application:react-navbar">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#9C27B0' }}>
                    <Toolbar>
                        <Button
                            sx={{ padding: 0 }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <img
                                src={HomeHubLogo}
                                alt="Logotipo do HomeHub"
                                style={{ width: 176 }}
                            />
                        </Button>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={openMenu}
                            >
                                <AccountCircle />
                            </IconButton>
                            <IconButton size="large" color="inherit">
                                <Notifications />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                    <DrawerMenu
                        authId={authInfo?.authId}
                        onClose={() => setDrawerOpen(false)}
                    />
                </Drawer>
                <UserMenu
                    anchorEl={anchorEl}
                    authInfo={authInfo}
                    onClose={closeMenu}
                    onLogoutClick={() => setIsVisible(true)}
                />
            </Box>
            {isVisible && (
                <Parcel
                    config={() =>
                        import(
                            /* webpackIgnore: true */ // @ts-ignore-next
                            '@homehub/react-parcel'
                        )
                    }
                    title="HomeHub"
                    description="Deseja efetuar logout e sair do HomeHub?"
                    leftBtnText="Cancelar"
                    rightBtnText="Sair"
                    leftBtnAction={() => setIsVisible(false)}
                    rightBtnAction={() => logout()}
                    isVisible={isVisible}
                />
            )}
        </div>
    )
}

export default App
