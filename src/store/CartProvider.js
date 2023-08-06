import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {

    //An array of item objects
    items: [],
    totalAmount: 0
};

const cartReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex = prevState.items.findIndex((item) => { return item.id === action.item.id; });

        const existingCartItem = prevState.items[existingItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...prevState.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        else {
            updatedItems = prevState.items.concat(action.item);
        }

        /*
        //MY SOLUTION TO HANDLE CART LOGIC 
        const addItemId = action.item.id;
        const addItemAmount = action.item.amount;
        let itemUpdated = false;

        let updatedItem = prevState.items.map((item) => {
            if(item.id === addItemId){
                itemUpdated = true;
                const updatedAmount = item.amount + addItemAmount
                return{
                    id: item.id,
                    price: item.price,
                    amount: updatedAmount,
                    name: item.name
                }
            }
            else{
                return item;
            }
        })

        if(!itemUpdated){
            updatedItem = prevState.items.concat(action.item);
        } */


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    else if (action.type === 'REMOVE') {

        const existingItemIndex = prevState.items.findIndex((item) => { return item.id === action.id });
        const existingCartItem = prevState.items[existingItemIndex];
        const updatedTotalAmount = prevState.totalAmount - existingCartItem.price;
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = prevState.items.filter((item) => item.id !== action.id);
        }
        else {
            let updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...prevState.items];
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;