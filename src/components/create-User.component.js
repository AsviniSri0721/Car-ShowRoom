import React, { Component } from 'react';
import axios from 'axios';
import pic from "./ccc.jpg";
import {Link} from "react-router-dom";




export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);


        this.state = {
            name:'',
            age:0,
            address: ''

        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    age: response.data.age,
                    address: response.data.address,


                })
            })
            .catch(function (error) {
                console.log(error);
            })




    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
        };


        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        window.location = "/";


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





    render() {
        return (
            <body background={pic}>
            <div className={"container"} style={{width:'40.4rem',height:'80rem'}} >
                <br/>
                <div className={"card"}style={{width:'50.4rem',height:'71rem',opacity:0.9}}>

                    <b>  <i> <h3 align={"center"}>Create New User </h3></i></b>

                    <form onSubmit={this.onSubmit}>
                        <div className="container">

                            <div className="form-group">
                                <label>Name: </label>
                                <input  type="text"
                                        required
                                        placeholder={"Name"}
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                />
                            </div>

                            <div className="form-group">
                                <label>Address: </label>
                                <div className="form-group">
                <textarea
                    className="form-control"
                    rows="8"
                    required
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                ></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Age: </label>
                                <input
                                    required
                                    type="number"
                                    className="form-control"
                                    value={this.state.age}
                                    onChange={this.onChangeAge}
                                />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Create User Log" className="btn btn-primary" />
                            </div>

                            <div>
                                <div className="form-group">
                                    <label>Name: </label>
                                    <br/>
                                    <input
                                        value={this.state.name}
                                    />
                                    <br/>
                                    <label>Address: </label>
                                    <br/>
                                    <input
                                        value={this.state.address}
                                    />
                                    <br/>
                                    <label>Age: </label>
                                    <br/>
                                    <input
                                        value={this.state.age}
                                    />
                                    <br/>

                                    <label>Status: </label>
                                </div>



                            </div>


                        </div>
                    </form>




                </div>
            </div>
            </body>
        )
    }
}
