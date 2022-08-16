import React from 'react';
import { Link } from 'react-router-dom';



const UserLogin = ({ user }) => {




    return (
        <>
            <div>
                <form>
                    <label>Username</label>
                    <input type="textbox"></input>

                    <label>Password</label>
                    <input type="password"></input>

                    <Link to="/home">login</Link>


                </form>
            </div>

        </>

    )




}
export default UserLogin;