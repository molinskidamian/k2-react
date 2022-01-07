import React from "react";
import styles from "./Form.module.scss";

const classes = ["btn", "primary"];
const Form = ({submitFn}) => (
    <form autoComplete='off' onSubmit={submitFn}>
        <div className={styles.formController}>
            <input className={styles.input} name='fullName' placeholder='Full Name' />
        </div>
        <div className={styles.formController}>
            <input className={styles.input} name='email' placeholder='Address Email' />
        </div>
        <div className={styles.formController}>
            <input className={styles.input} name='telephone' placeholder='Telephone number' />
        </div>
        <button className={classes.join(", ")} type='submit'>
            Add new user
        </button>
    </form>
);

export default Form;
