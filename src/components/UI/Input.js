import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            {
                /* input = {
                     type:"text",
                     id:"someID",
                     value:""
                 } */
            }
            <input {...props.input} />
        </div>
    );
};

export default Input;