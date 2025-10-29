import { useEffect, useState } from 'react'
import { AuthInfo, checkIsAuthenticated } from '@homehub/react-utils'
import { DashboardRoutes } from './routes'

const App = () => {
    const [authInfo, setAuthInfo] = useState<typeof AuthInfo>()

    useEffect(() => {
        const { authInfo: authObj, isAuthenticated } = checkIsAuthenticated()

        if (!isAuthenticated) {
            location.replace('/')
            return
        }

        setAuthInfo(authObj)
    }, [])

    return <DashboardRoutes />
}

export default App
