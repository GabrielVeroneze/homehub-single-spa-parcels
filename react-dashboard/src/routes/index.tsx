import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from '../screens/Dashboard'
import EditProfile from '../screens/EditProfile'
import Devices from '../screens/Devices'
import Security from '../screens/Security'

const router = createBrowserRouter([
    {
        path: '/dashboard/:authId',
        Component: Dashboard,
    },
    {
        path: '/dashboard/:authId/edit-profile',
        Component: EditProfile,
    },
    {
        path: '/dashboard/:authId/devices',
        Component: Devices,
    },
    {
        path: '/dashboard/:authId/security',
        Component: Security,
    },
])

export const DashboardRoutes = () => {
    return <RouterProvider router={router} />
}
