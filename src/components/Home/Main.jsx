import {  Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";



const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;