import { redirect } from "react-router-dom";
import { removeToken, removeTokenExpiration } from "../util/auth";

export function action() {
    removeToken();
    removeTokenExpiration();
    return redirect('/');
}