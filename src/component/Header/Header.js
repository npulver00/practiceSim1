import React from 'react';
import{NavLink} from "react-router-dom";

const Header = () => {
    return ( 

        <div className= "header">
            <NavLink to = "/"> <button>Dashboard</button></NavLink>
            <NavLink to= "/add"> <button>Add Inventory</button></NavLink>
        </div>
     );
}
 
export default Header;