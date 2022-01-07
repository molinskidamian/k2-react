import React from "react";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import styles from "./EmployeesView.module.scss";

const Employees = () => (
    <div className={styles.wrapper}>
        <div className={styles.menu}>
            <button>Add new Employee</button>
        </div>

        <h2>Employees</h2>
        <p>Podstrona employees</p>
        <ListWrapper />
    </div>
);

export default Employees;
