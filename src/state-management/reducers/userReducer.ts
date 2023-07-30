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

export default userReducer;