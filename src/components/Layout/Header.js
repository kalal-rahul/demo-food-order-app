import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {

    return(
        <Fragment>
            <header className={classes.header}>
                <h1 style={{marginLeft:'2%'}}>Pomato Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src= {mealsImage} alt="A table with meals" />
            </div>
        </Fragment>
    );
};

export default Header;