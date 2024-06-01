import './Sidenavbar.css';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';



export default function  Sidenavbar(){


    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')



    const handleProfile = () => {
        if(token !== null){
            navigate('/profile')
        }else{
            alert("Sign Up First")
            navigate('/signup')
        }
    
    }

    
    const handleLogout = () => {
        sessionStorage.clear()
    }


    return(
        <>
        {/* <!-- Sidenav --> */}
        <div className="sidenav">
            

            <div className="sidenav-url">
                <div className="url">
                    <button to={`#`} onClick={handleProfile} className="active">Profile</button>
                    <hr/>
                </div>
                <div className="url">
                    <Link to={`/login`}>Log In</Link>
                    <hr/>
                </div>
                <div className="url">
                    <Link to={`/signup`}>Sign Up</Link>
                    <hr />
                </div>
                <div className="url">
                    <Link to={`/login`} onClick={handleLogout}>Log Out</Link>
                    <hr />
                </div>
            </div>
        </div>
        {/* <!-- End -->  */}
            
        </>
    )
}