import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT
} from './actions'

const initialState = {
    ingredients: {
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    },
    totalPrice: 50,
    ingredientsPrice: {
            Salad: 30,
            Bacon: 70,
            Cheese: 50,
            Meat: 100
        },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] +1
                },
                totalPrice: state.totalPrice + state.ingredientsPrice[action.payload] 
            };
            case REMOVE_INGREDIENT:
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.payload]: state.ingredients[action.payload] - 1
                    } ,
                    totalPrice: state.totalPrice - state.ingredientsPrice[action.payload] 
            };
        default:
            return state;
    }
}; 

export default reducer;