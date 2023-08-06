import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
    // console.log("Before :" + amountInputRef.current);


    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value; //value is always a string
        const enteredAmountNumber = +enteredAmount;
        amountInputRef.current.value = 0; //Set value to zero after submission

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        setAmountIsValid(true);
    };

    return (
        <>
            <form className={classes.form}  onSubmit={submitHandler}>
                <Input
                    ref={amountInputRef}
                    label='Amount'
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        // max: '5',
                        step: '1',
                        defaultValue: '0'
                    }
                    }
                />
                {/* Any button placed inside a form elem will by default act as a submit button
                    Hence, clickiing on that button will submit the form
                */}
                <button >+ Add</button>
                {!amountIsValid && <p style={{color:'red'}}>Enter a valid amount 1-5</p>}

                {/* {console.log("AFTER :" + amountInputRef.current)} */}
            </form>
           
        </>
    );
};

export default MealItemForm;