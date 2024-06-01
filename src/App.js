import Header from "./component/Header/Header";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Sidenavbar from "./component/Sidebar/Sidenavbar";
import Profile from "./component/Profile/Profile";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import './App.css';


function App (){
    return(
        <>
        <div className="profile">
            <BrowserRouter>
                <Header/>
                <Sidenavbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
            
        </>
    )
}

export default App;