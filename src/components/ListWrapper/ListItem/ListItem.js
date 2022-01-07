import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = ({id, name, email, number}) => (
    <li className={styles.wrapper}>
        <p>
            <a href={email}>{name}</a> id: {id} number: {number}
        </p>
    </li>
);

export default ListItem;
