import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                Form
               <div><input/></div> 
               <div><input/></div> 
               <div><input/></div> 
               
                <button>Cancel</button>
               <NavLink to= "/"> <button>Add Inventory or Save Inventory</button></NavLink>
            </div>
         );
    }
}
 
export default Form;