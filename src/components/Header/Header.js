import React from "react";
import styles from "./Header.module.scss";

const Header = ({children}) => <header className={styles.wrapper}>{children}</header>;

export default Header;
