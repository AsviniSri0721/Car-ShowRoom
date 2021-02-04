import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/nav" className="navbar-brand">NEW PROJECT</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Categories</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/stock" className="nav-link">Add Staff</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/nav" className="nav-link">View Staff</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
