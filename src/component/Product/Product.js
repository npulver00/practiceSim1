import React from 'react'
import{NavLink} from "react-router-dom";

const Product = () => {
    return ( 
        <div>
           <NavLink to="/edit/:id"><button>Edit</button></NavLink> 
            <button>Delete</button>
        </div>
     );
}
 
export default Product;