import { Link } from "react-router-dom";

import { MdOutlineDashboardCustomize } from "react-icons/md";

import { BiCubeAlt,BiCartAdd } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
const Header = () => {

    return (
        <div className="flex-row flex">
         
            <ul className="menu bg-base-200 rounded-box">
  <li>
    <a className="tooltip pt-4  tooltip-right" data-tip="Home">
    <Link to ="/">
      <MdOutlineDashboardCustomize className="ml-5 text-2xl"></MdOutlineDashboardCustomize>
    
    Dashboard</Link>
    </a>
  </li>
  
  <li>
    <a className="tooltip  py-4 tooltip-right" data-tip="Stats">
    <Link to ="/products">
    <BiCubeAlt className="ml-5 text-2xl"></BiCubeAlt> Products</Link>
    </a>
  </li>
  <li>
    <a className="tooltip tooltip-right" data-tip="Stats">
    <Link to ="/purchase">
    <IoBagHandleOutline  className="ml-5 text-2xl"></IoBagHandleOutline>
    Purchase</Link>
    </a>
  </li>
  <li>
    <a className="tooltip py-4 tooltip-right" data-tip="Stats">
    <Link to ="/sales">
    <BiCartAdd className="ml-5 text-2xl"></BiCartAdd>
    Sales</Link>
    </a>
  </li>
</ul>
            
        </div>
    );
};

export default Header;