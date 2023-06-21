import { createContext } from "react";
import { authLogin } from "../App";


export const AuthContext = createContext<authLogin | null>(null);