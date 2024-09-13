import { redirect } from "react-router-dom";

const TOKEN_KEY = 'token';

export function getAuthToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    return token; 
}

export function setAuthToken(token) {
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