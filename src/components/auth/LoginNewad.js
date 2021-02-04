import axios from "axios";
import React from "react";


export function isAuthenticated( stockData) {
    return function(dispatch) {

        let url =  'http://localhost:5000/api/authad'

    }

}




export async function doLogin(emailad6, passwordad6) {

    if(emailad6!=="" && passwordad6!=='') {


        let url =  'http://localhost:5000/api/authad';

        let obj={
            emailad6:emailad6,
            passwordad6:passwordad6
        }
        //
        // const Stock = props => {
        //     const { positionst6 } = props;
        //     if (positionst6 === "admin" && isAuthenticated()) return <Redirect to="/stock" />;
        //     else if (positionst6 === "stock" && isAuthenticated()) return <Redirect to="/" />;
        // };




        axios.post(url, obj)
            .then((response) => {
                // localStorage.removeItem( "token" )

                localStorage.setItem( "token", response.data.token );

                if(isAuthenticated = true){
                    alert("You are logged in")
                    //     if(positionst6 = "admin" ){
                    //                 //         window.location = '/stock'
                    //                 //     }
                    //                 // else if(positionst6 = "stock"){
                    //                 //     window.location = '/'
                    //                 //     }
                    //                 // else{
                    //                 //     window.location = '/create'
                    //                 //     }
                }

                window.location="/nav"


            })
            .catch((err) => {
                alert("please login again")
            })

    }
    else{
        alert(" provide the correct username and password")
    }
    return {
        type: "LOGIN_EMPTY",
        payload: {
            message : "Empty username or password.",
        }
    }



}







