import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import UsersList from "./components/users-list.component";
import CreateUser from "./components/create-User.component";
import Home from "./components/homepage.component";
import Login from "./components/auth/LoginForm";
import LoginFormad from "./components/auth/LoginFormad";



function App() {
    return (
        <Router>
            {/*<div className="container">*/}
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/list" exact component={UsersList} />

            <Route path="/user" component={CreateUser} />

            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Loginad" component={LoginFormad}/>


            {/*</div>*/}
        </Router>
    );
}

export default App;
