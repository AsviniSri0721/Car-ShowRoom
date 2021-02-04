import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.age}</td>
        <td>{props.user.address}</td>
        <td>
            <Link to={+props.user._id}>Approve</Link>  | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
        </td>
    </tr>
)

// const Approvestatus =(status)=>{
//     let c = status;
//     setCart([...Cart,c]);
//
//     alert("Added to Cart");
//
// }


export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.log(error);

            })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/'+id)
            .then(res => console.log(res.data));
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    userList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
        })
    }

    render() {
        return (
            <div>
                <b><i> <h3 align={"center"}>List Users</h3></i></b>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
