import { Fragment } from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Good Food - Good Health</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore consequatur,
                nihil
            </p>
            <p>dolorum nemo quod esse nam ratione molestias,
                ullam possimus perspiciatis sapiente aut rerum doloribus! Et nemo accusantium reiciendis!
            </p>
        </section>
    );
};

export default MealsSummary;