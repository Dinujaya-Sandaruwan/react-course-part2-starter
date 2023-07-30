import { ReactNode, useReducer } from "react"
import UserContext from "./userContext"

interface Login {
    status : "LOGGED_IN";
    name: string;
}

interface Logout {
    status : "LOGGED_OUT";
}

export type UserAction = Login | Logout;

const userReducer = (state: string, action: UserAction): string => {
    if (action.status === "LOGGED_IN") {
        return action.name
    }
    if (action.status === "LOGGED_OUT") {
        return ""
    }
    return state;
}

interface Props {
    children: ReactNode
}


const UserProvider = ({children} : Props ) => {
    const [user, dispatch] = useReducer( userReducer, '' )

    return (
        <UserContext.Provider value={{ user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider