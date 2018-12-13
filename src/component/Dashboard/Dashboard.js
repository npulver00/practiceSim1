import React, { Component } from "react";
import Product from "../Product/Product";
import { connect } from "react-redux";
import {
  post_All_Shoes,
  updateName,
  updateImage,
  updatePrice
} from "../../redux/reducer";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteShoe = id => {
    axios.delete(`/api/shoes/${id}`).then(response => {
      this.props.post_All_Shoes(response.data);
      this.props.getAllTheShoes();
      console.log("this.props", this.props);
      console.log("DELETE REPSONE PLEASE LOOK HERE", response.data);
    });
  };

  render() {
    console.log(this.props, "aaaaaaaaaaaaaaaaaaaaaa");
    return (
      <div className="productBox">
        {this.props.allshoes.map(shoe => {
          console.log("shoe", shoe);
          return (
            <div key={shoe.id}>
              <Product
                image={shoe.image}
                name={shoe.name}
                price={shoe.price}
                id={shoe.id}
                deleteShoe={this.deleteShoe}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { allshoes, name, image, price } = state;
  return {
    allshoes,
    name,
    image,
    price
  };
};

export default connect(
  mapStateToProps,
  { post_All_Shoes, updateName, updateImage, updatePrice }
)(Dashboard);
