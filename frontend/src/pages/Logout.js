import { redirect } from "react-router-dom";
import { removeToken } from "../util/auth";

export function action() {
    removeToken();
    return redirect('/');
}