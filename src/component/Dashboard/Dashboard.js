import React, { Component } from 'react';
import Product from "../Product/Product";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="productBox">
                    <Product/>
                </div>
                
            </div>
         );
    }
}
 
export default Dashboard;