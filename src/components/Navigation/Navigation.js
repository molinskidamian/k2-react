import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink
                    exact
                    to='/'
                    activeclassname={styles.navItemLinkActive}
                    onlyActiveOnIndex
                    className={styles.navItemLink}>
                    {" "}
                    Start
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    activeclassname={styles.navItemLinkActive}
                    onlyActiveOnIndex
                    className={styles.navItemLink}
                    to='/employees'>
                    Employees
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    exact
                    activeclassname={styles.navItemLinkActive}
                    onlyActiveOnIndex
                    className={styles.navItemLink}
                    to='/services'>
                    Services
                </NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                    exact
                    activeclassname={styles.navItemLinkActive}
                    onlyActiveOnIndex
                    className={styles.navItemLink}
                    to='/contact'>
                    Contact
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;
