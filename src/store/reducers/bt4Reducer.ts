const initialState =0;
export const counter= (state=initialState,action:any)=>{
    switch (action.type) {
        case 'Increase':
           return state+1;
        case 'Decrease':
            return state-1;
        default:
            return state;
    }
}