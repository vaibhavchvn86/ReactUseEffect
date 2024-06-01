import './Header.css';

export default function Header (){
    return(
        <>
        {/* <!-- Navbar top -->  */}
        <div className="navbar-top">
            <div className="title">
                <h1>React Authentication App</h1>
            </div>

            {/* <!-- Navbar -->  */}
            <ul>
                
                <li>
                    <a href="#sign-out">
                        <i className="fa fa-sign-out-alt fa-2x"></i>
                    </a>
                </li>
            </ul>
             {/* <!-- End -->  */}
        </div>
       {/* <!-- End --> */}
        
        </>
    )
}