import React, {useState} from 'react';



const UserLogin = ({user}) => {

    const [clicked, setClicked] = useState(false)

    const handleLogin = () => {

        setClicked(true)
      
    }


    



    return(
        clicked ?
        <div>
        <h2> Welcome {user.name} </h2>
    </div>
    :
        <div>
            <form>
                <label>Username</label>
                <input type="textbox"></input>

                <label>Password</label>
                <input type="textbox"></input>

                <button onClick ={handleLogin}> login </button>

                
            </form>
        </div>
    

       
    )



  
}
export default UserLogin;