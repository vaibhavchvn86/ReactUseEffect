import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Signup.css';

// const url = 'http://localhost:5000/users';




export default function Signup() {

    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    // console.log(username);
    // console.log(email);
    // console.log(phone);
    // console.log(password)

    const generateCoupon = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let coupon = '';
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            coupon += characters.charAt(randomIndex);
        }
        return coupon;

    }

    const handelCheckout = () => {
        // fetch(url,{
        //     method:'POST',
        //     headers:{
        //         'accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         name : username,
        //         email : email,
        //         phone : phone,
        //         password : password
        //     })

        // })
        // .then(generateCoupon())
        // .then(navigate(`/login`))


        const generateToken = generateCoupon()
        sessionStorage.setItem('token', generateToken);
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('username', username)
        sessionStorage.setItem('phone', phone)
        navigate('/login')

    }

    return (
        <>
            {/* <!-- Main -->  */}
            <div className="signup">
                <h2>Sign Up Form</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="signin-container">
                            <div>
                                <label htmlFor="email">Username :</label>
                                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} id="email" name="email" placeholder="Enter You'r Username" />
                            </div>

                            <div>
                                <label htmlFor="email">Email :</label>
                                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} id="email" name="email" placeholder="Enter You'r Email" />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone No :</label>
                                <input type="phone" value={phone} onChange={(event) => setPhone(event.target.value)} id="phone" name="phone" placeholder="Enter You'r Phone No" />
                            </div>

                            <div>
                                <label htmlFor="pass">Password :</label>
                                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} id="pass" name="pass" placeholder="Enter  Password" />
                            </div>

                            <div>
                                <button onClick={handelCheckout}>Sign Up</button>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}