import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';



// const url = 'http://localhost:5000/users'

export default function Login (){

    const navigate = useNavigate();


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [message, setMessage] = useState();
    // const [message, setMessage] = useState();
    // console.log(username);
    // console.log(password)

    const handSignup = () => {
        navigate('/signup')
    }


    const handleCheckOut = () => {
        // fetch(url,{method:'GET'})
        // .then((res) => res.json())
        // .then((data) => {
        //     // console.log(data);
        //     if(data[0].email === username){
        //         if(data[0].password === password){
        //            navigate('/profile')
        //         }else{
        //             alert("Invalid Password")
        //         }
        //     }else{
        //         alert("Invalid Email")
        //     }
        // })

        const userEmail = sessionStorage.getItem('email')
        const token = sessionStorage.getItem('token')
        if(token !== null){
            if(email === userEmail){
                alert("Logged In Successfully..")
                navigate('/profile')
            }else{
                alert("Invalid Email")
            }
        }else{
            alert("Sign Up Fist")
            navigate('/signup')
        }

      
    }


    return(
        <>
        <div className="login">
            <h2>Log In Form</h2>
            <div className="card">
                <div className="card-body">
                    <div className="login-container">

                        {/* <div>
                            <label htmlFor="email" style={{textAlign:'center'}}>{message}</label>
                        </div> */}

                        <div>
                            <label htmlFor="email">Email :</label>
                            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} id="email" name="email" placeholder="Enter You'r Email"/>
                        </div>

                        <div>
                            <label htmlFor="pass">Password :</label>
                            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} id="pass" name="pass" placeholder="Enter You'r Password"/>
                        </div>

                        <div>
                            <button onClick={handleCheckOut}>Log In</button>
                            <button onClick={handSignup}>Sign Up</button>
                        </div>
                    </div>
                   
                   
                </div>
            </div>

            
        </div>
        </>
    )
}