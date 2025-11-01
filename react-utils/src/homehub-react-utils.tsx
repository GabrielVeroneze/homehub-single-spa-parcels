import Cookies from 'universal-cookie'

export interface AuthInfo {
    email: string
    authId: string
    firstName?: string
    lastName?: string
}

export const loginFunction = (email: AuthInfo['email']) => {
    const authId = crypto.randomUUID()
    const cookies = new Cookies(null, { path: '/' })

    cookies.set('auth', { email: email, authId: authId })

    location.replace(`/dashboard/${authId}/`)
}

export const logoutFunction = () => {
    const cookies = new Cookies(null, { path: '/' })

    cookies.remove('auth')

    return location.replace('/')
}

export const checkIsAuthenticated = () => {
    const cookies = new Cookies(null, { path: '/' })

    const auth: AuthInfo = cookies.get('auth')

    if (!auth) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    if (!location.pathname.includes(auth.authId)) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    return { authInfo: auth, isAuthenticated: true }
}

export const editAuthInfo = (data: AuthInfo) => {
    const cookies = new Cookies(null, { path: '/' })

    const auth: AuthInfo = cookies.get('auth')

    if (!location.pathname.includes(auth.authId)) {
        return logoutFunction()
    }

    cookies.set('auth', data)

    return
}
