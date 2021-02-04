import React,{Component} from 'react';
import {Form,Button,Card,Tab,Tabs} from 'react-bootstrap';
import {  Panel,Row,FormGroup,Col,FormControl} from 'react-bootstrap';
import { CardBody } from 'reactstrap';
import pic from './aaa.jpg';
// import admin from "./AdminPage"
import {doLogin} from './LoginNewad'
import CreateUser from "../users-list.component";
import {Link} from "react-router-dom";



class LoginFormad extends Component{

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            pass: ""
        };
    }

    pressEnter(event) {
        if(event.charCode == 13){
            this.doLogin();


        }
    }

    changeAdminName(event) {
        let fleldVal = event.target.value;
        this.setState({login: fleldVal, pass : this.state.pass});
    }

    changePass(event) {
        let fleldVal = event.target.value;
        this.setState({pass: fleldVal, login : this.state.login});
    }

    doLogin(props) {
        this.doLogin(this.state.login, this.state.pass)

        // window.location="/nav"

    }
    doLogin(props) {
        doLogin(this.state.login, this.state.pass)
        // window.location="/nav"


    }

    render(){
        return(
            <body background={pic} >
            <div className="formBodyld">
                <div className="lddop">

                    <Card align={"center"} style={{width:'40.4rem',height:'41rem'}} className={"card"}>
                        <br/>

                        <CardBody>
                            <Card.Text>
                                <div className="csignuppage">
                                    <div className="csignupformdetails">

                                    </div>

                                    <div className="csignupform">
                                        <div className="textblock">
                                            <h5><br/><b><i>WELCOME</i></b></h5>
                                        </div>


                                        <br/><Form horizontal>

                                        <Form.Group as={Row} controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                                Username&nbsp;&nbsp; &nbsp; &nbsp;

                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="email" placeholder="Login" name="login" onChange={this.changeAdminName.bind(this)} onKeyPress={this.pressEnter.bind(this)} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                                Password
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="password" placeholder="password" name="pass" onChange={this.changePass.bind(this)} onKeyPress={this.pressEnter.bind(this)} />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicCheckbox">
                                            {/*<Form.Check type="checkbox" label="Check me out" /><br/>*/}
                                            <br/>

                                            {/*<div className="csignup">*/}
                                            {/*    <button className={"btn btn-lg btn-primary btn-block"} color="primary" align="center" style={{opacity:1}} type="button"  onClick={this.doLogin.bind(this)}>SIGN IN</button>*/}
                                            {/*</div><br/>*/}
                                            <div className="csignup">
                                                <Link to="/list">
                                                    <button className={"btn btn-lg btn-primary btn-block"} color="primary" align="center" type="button"  onClick={this.doLogin.bind(this)}>SIGN IN</button>
                                                </Link>
                                            </div><br/>

                                            <a href="/Registerad">I'm new here as a Staff!</a> <br/> <br/>
                                            <a href="/Register">I'm new here as a User!</a> <br/> <br/>

                                        </Form.Group>

                                    </Form>
                                    </div>


                                </div>



                            </Card.Text>
                        </CardBody>
                    </Card>

                </div>
            </div>
            </body>
        );
    }


}


export default LoginFormad;
