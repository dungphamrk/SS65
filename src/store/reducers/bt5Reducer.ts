const initialState:number[] =[];
export const randomNumber=(state=initialState,action:any)=>{
    switch (action.type) {
        case 'get_number':
            let newNumber=Math.floor((Math.random() * 10) + 1)
            console.log(state);
            
            return [...state, newNumber];
        default:
            return state;
    }
}