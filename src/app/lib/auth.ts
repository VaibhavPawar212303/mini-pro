// lib/auth.ts
export const isUserLoggedIn = (): boolean => {
    if (typeof window !== "undefined") {
        return !!localStorage.getItem("user");
    }
    return false;
};

export const loginUser = (email: string) => {
    localStorage.setItem("user", email);
};

export const logoutUser = () => {
    localStorage.removeItem("user");
};
