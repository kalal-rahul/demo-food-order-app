import { Fragment, useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';


const HeaderCartButton = props => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    //Adding string value conditionally
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''} `;

    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((prevValue, currItem) => {
        return prevValue + currItem.amount;
    }, 0);

    //Object destructuring 
    

    useEffect(() => {
        if(cartCtx.items.length === 0)
            return;

        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300)  

        //Clean Up
        return () => {
            clearTimeout(timer);
        }

    }, [items]);

    return (
        <button className={btnClasses} style={{ marginRight: '2%' }} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>My cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;