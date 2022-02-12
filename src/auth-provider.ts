import { User } from 'screens/project-list/search-panel';
//在真实环境中，如果使用firebase，本文将不需要开发者开发

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider_token__'

export const getToken = ()=> window.localStorage.getItem(localStorageKey)

export const handleUserRespose = ({user}:{user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
}

export const login = (data: { username: string, password: string}) => {
    fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        if (response.ok) {
            return handleUserRespose(await response.json())
        }
    });
}

export const register = (data: { username: string, password: string}) => {
    fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        if (response.ok) {
            return handleUserRespose(await response.json())
        }
    });
}

export const logout = () => window.localStorage.removeItem(localStorageKey)