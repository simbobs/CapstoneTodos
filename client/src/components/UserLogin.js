import React from 'react';
import { Link } from 'react-router-dom';





const UserLogin = ({ user }) => {




    return (
        <>
            <div>
                <h1 id='add-form-header'>WELCOME TO TODOS</h1>
                <form className="form">
                    <input id='form-name' type="textbox" placeholder="Username"></input>
                    <br />

                    <input id='form-hours' type="password" placeholder="Password"></input>

                    <Link to="/home"><button className='add-button'>LOGIN</button></Link>


                </form>
            </div>

        </>

    )




}
export default UserLogin;