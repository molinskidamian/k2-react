import React from "react";
import ListItem from "./ListItem/ListItem.js";
import styles from "./ListWrapper.module.scss";

// const ListWrapper = ({users}) => (
//     <ol className={styles.wrapper}>
//         {users.map(user => (
//             <ListItem key={user.id} {...user} />
//         ))}
//     </ol>
// );

const users = [
    {
        id: 1,
        name: "Damian Moliński",
        email: "kontakt@damianmolinski.pl",
        number: 794100813,
    },
];

class ListWrapper extends React.Component {
    state = {
        users: [...users],
    };

    addUser = e => {
        e.preventDefault();
        console.log("click");

        const createNewUser = {
            id: users.lenght + 1,
            name: e.target[0].value,
            email: e.target[1].value,
            number: e.target[2].value,
        };

        this.setState(prevState => ({
            users: [...prevState.users, createNewUser],
        }));

        e.target.reset();
    };

    render() {
        return (
            <ol className={styles.wrapper}>
                {users.map(user => (
                    <ListItem key={user.id} {...user} />
                ))}
            </ol>
        );
    }
}

export default ListWrapper;
