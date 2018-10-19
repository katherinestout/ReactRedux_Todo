const initialState = {
    age: 21,
    history: []
};

const reducer = (state =initialState , action) => {
    const newState = {...state};

    switch (action.type){
        case "AGE_UP":
        return{
            ...state,
            age: state.age + action.value,
            history: state.history.concat({id:Math.random(), age: state.age + action.value})
           
        };

        
        //break;
        case "AGE_DOWN":
        return{
            ...state,
            age: state.age - action.value,
            history: state.history.concat({id:Math.random(), age: state.age - action.value})
        };
     //break;
     case "DEL_ITEM":
        return{
            ...state,
            history: state.history.filter(el => el.id !== action.key)
        }
        //break;
        //default: 
    }

    return newState;
};

export default reducer;