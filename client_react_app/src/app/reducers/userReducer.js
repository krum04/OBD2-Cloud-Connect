const userReducer = (state = {
    userId: ""
    }, action) => {
    switch (action.type){
        case "SET_USER_ID":
           return state = {
                ...state,
                userID: action.payload
            }
            default:
               return state;     
    }
}

export default userReducer;