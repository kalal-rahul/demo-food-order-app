import { useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>
        {
            [{ id: '1', name: 'Sushi', amount: '2', price: '12.47' }].map((item) => {
                <li>{item.name}</li>;
            })
        }
    </ul>;



    return (
        // This should be within a modal
        <Modal onClose={props.onClose}>

            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>38.39</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>

    );
};

export default Cart;