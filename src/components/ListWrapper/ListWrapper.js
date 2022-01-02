import React from "react";
import ListItem from "./ListItem/ListItem.js";

const ListWrapper = ({users}) =>
    <ul>
        {users.map(<ListItem />)}
    </ul>;

export default ListWrapper;
