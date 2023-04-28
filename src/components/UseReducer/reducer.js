let INITIAL_STATE = { counter: 0, name: 'Jack'};
const ACTION_TYPES = {
    INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
    GET_NAME: 'GET_NAME',   
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_QUANTITY': {
            let res = {...state, counter: state.counter +1}
            return res;
        }
        case 'DECREMENT_QUANTITY':{
            let res = {...state, counter: state.counter -1}
            return res;
        }
        case 'GET_NAME':{
            let res = {...state, name: action.payload}
            return res;
        }
        default:
             return state;
    }
}

export {INITIAL_STATE, reducer,ACTION_TYPES}