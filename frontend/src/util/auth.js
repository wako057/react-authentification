export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token; 
}

export function setAuthToken(token) {
    return localStorage.setItem('token', token);
}