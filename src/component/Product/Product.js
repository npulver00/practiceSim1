import React from 'react'
import{NavLink} from "react-router-dom";

const Product = (props) => {

    

    return ( 
        <div>
            <div><img src={props.image}/></div>
            <div>{props.name}</div>
            <div>{props.price}</div>
           <NavLink to="/edit/:id"><button>Edit</button></NavLink> 
            <button onClick={()=>{props.deleteShoe(props.id)}}>Delete</button>
        </div>
     );
}
 
export default Product;