import React from "react";
// import ListWrapper from "../../components/ListWrapper/ListWrapper";
// import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Employees from "../EmployeesView/EmployeesView";
import Contact from "../ContactView/ContactView";
import Services from "../ServicesView/ServicesView";
import Navigation from "../../components/Navigation/Navigation";
import InformationView from "../InformationView/InformationView";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const users = [
    {
        id: 1,
        name: "Damian Moliński",
        email: "kontakt@damianmolinski.pl",
        number: 794100813,
    },
];

class Root extends React.Component {
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
        // return <ListWrapper users={this.state.users} />;
        return (
            <BrowserRouter>
                <>
                    {/* <ListWrapper users={this.state.users} /> */}
                    {/* <Form submitFn={this.addUser} /> */}
                    <Header>
                        <Navigation />
                    </Header>
                    <h2>KGHM Polska Miedź S.A.</h2>
                    <h3>Oddział klimatyzacji - K2</h3>
                    <Routes>
                        <Route path='/' element={<InformationView />} />
                        <Route path='/employees' element={<Employees />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/services' element={<Services />} />
                    </Routes>
                </>
            </BrowserRouter>
        );
    }
}

export default Root;
