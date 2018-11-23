const userReducer = (state = {
    userId: ""
}, action) => {
    switch (action.type){
        case "UPDATE":
            state = {
                ...state,
                userID: action.payload
            };      
    }
    return state;
}

export default userReducer;