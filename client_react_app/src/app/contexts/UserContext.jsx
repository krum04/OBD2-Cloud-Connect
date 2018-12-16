import React from 'react';

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
    state={
        user: 'cam'
    }
    render(){

        return(
            <UserContext.Provider value = {{...this.state}}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}