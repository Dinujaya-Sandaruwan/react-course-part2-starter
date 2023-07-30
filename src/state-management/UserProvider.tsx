import { ReactNode, useReducer } from "react"
import userReducer from "./reducers/userReducer"
import UserContext from "./contexts/userContext"

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