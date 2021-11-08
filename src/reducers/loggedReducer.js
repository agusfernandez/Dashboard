const loggedReducer =(state=false, action)=>{
    switch(action.type){
        case 'SIGN IN':
            return !state
            break;
        case 'SIGN OUT':
            if (state === true) return !state
            else return state
            break;
        default:
            return state;
    }
};


export default loggedReducer;