const STORAGE_KEY = "platzi_host_user";

export function isAuthenticated() {
    return localStorage.getItem(STORAGE_KEY) === "true";
}

export function login() {
    localStorage.setItem(STORAGE_KEY, "true");
}

export function logout() {
    localStorage.removeItem(STORAGE_KEY);
}
