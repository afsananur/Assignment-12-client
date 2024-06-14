import { useContext } from "react";
import logo from "../../../public/logo.jpg"
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {

  const handleLogOut=()=>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))

  }

  const {user,logOut} =useContext(AuthContext);

    return (
        <div className="navbar bg-base-200 p-4">
  <div className="flex-1">
   <Link to="/"> <img src={logo} className="w-48"alt="" /></Link>
  </div>
  <div className="flex-none gap-2">
    
  <div className="navbar-end">{

user ? <div className="gap-4 flex items-center">
    <p className="hidden md:flex  text-xl ">{user.displayName}</p>
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img src= {user.photoURL}/>
        </div>
    </label>
    <button className="btn bg-cyan-700 text-white   mr-3" onClick={handleLogOut}>Logout</button>
</div> :
    <Link to='/Login'>

        <button className="btn bg-cyan-700 text-white">Login</button>
    </Link>
}


</div>
  </div>
</div>
    );
};

export default Navbar;