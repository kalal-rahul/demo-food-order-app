import { Fragment } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    return (
        <button className={classes.button} style={{marginRight:'2%'}} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>My cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
};

export default HeaderCartButton;