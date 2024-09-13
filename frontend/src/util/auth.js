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