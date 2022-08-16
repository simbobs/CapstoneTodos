import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import '../static/Login.css';


const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #B96AC9;
margin-top: 15px;
color: #B96AC9;
margin: 0 1em;
padding: 0.25em 1em;
font-family: 'Baloo Bhaijaan';
font-size: 2rem;

${props =>
        props.primary &&
        css`
  background: #B96AC9;
  color: white;
`};
`



const UserLogin = ({ user }) => {




    return (
        <>
            <div className="user-login">
                <h1 id='add-form-header'>WELCOME TO TODOS</h1>
                <form className="form">
                    <input id='form-name' type="textbox" placeholder="Username"></input>
                    <br />

                    <input id='form-hours' type="password" placeholder="Password"></input>

                    <Link to="/home"><Button>LOGIN</Button></Link>


                </form>
            </div>

        </>

    )




}
export default UserLogin;