import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";

const users = [
    {
        id: 1,
        name: "Damian Moliński",
        email: "kontakt@damianmolinski.pl",
        number: 794100813,
    },
];

class App extends React.Component {
    state = {
        users: [...users],
    };

    render() {
        return <ListWrapper users={this.state.users} />;
    }
}

export default App;
