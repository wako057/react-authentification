import { redirect } from "react-router-dom";

const TOKEN_KEY = 'token';
const TOKEN_EXPIRATION_KEY = 'expiration';

export function getAuthToken() {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }
    return token; 
}

export function setTokenExpiration() {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() +1);
    localStorage.setItem(TOKEN_EXPIRATION_KEY, expiration.toISOString());
}

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem(TOKEN_EXPIRATION_KEY);
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export function removeTokenExpiration() {
    localStorage.removeItem(TOKEN_EXPIRATION_KEY);
};

export function setAuthToken(token) {
    setTokenExpiration();
    return localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}

