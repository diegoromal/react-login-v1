import { Api } from "../../services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("u");

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
    console.log(email, password);
    try {
        const request = await Api.post("session", {
            email,
            password,
        });

        return request.data;
    } catch (error) {
        return null;
    }
}
