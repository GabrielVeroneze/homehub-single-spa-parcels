import { Box } from '@mui/material'
import Parcel from 'single-spa-react/parcel'
import LoginBox from './components/LoginBox'
import backgroundImg from './assets/background.png'

const App = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: '100%',
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom',
                height: '90vh',
            }}
        >
            <LoginBox />
            <Parcel
                config={() =>
                    import(
                        /* webpackIgnore: true */ // @ts-ignore-next
                        '@homehub/react-parcel'
                    )
                }
            />
        </Box>
    )
}

export default App
