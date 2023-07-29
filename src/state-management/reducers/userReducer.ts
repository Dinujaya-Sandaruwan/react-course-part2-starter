interface Login {
    status : "LOGGED_IN";
    name: string;
}

interface Logout {
    status : "LOGGED_OUT";
}

type Action = Login | Logout;

const userReducer = (state: string, action: Action): string => {
    if (action.status === "LOGGED_IN") {
        return action.name
    }
    if (action.status === "LOGGED_OUT") {
        return ""
    }
    return state;
}

export default userReducer;