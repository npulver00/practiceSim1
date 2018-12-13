import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import Form from "./component/Form/Form";
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import axios from "axios";
import { connect } from "react-redux";
import { get_All_Shoes, post_All_Shoes } from "./redux/reducer";

class App extends Component {
  componentDidMount() {
    this.getAllTheShoes();
    // this.postAllShoes()
  }

  //get endpoint and put state in redux for all of the shoes in sql
  getAllTheShoes = () => {
    axios.get("/api/shoes").then(response => {
      // console.log("getAllTheShoes", response)
      this.props.get_All_Shoes(response.data);
      // console.log("get_All_Shoes", this.props.get_All_Shoes)
    });
  };

  postAllShoes = () => {
    axios.post("/api/shoes").then(response => {
      // console.log("front",response)
      this.props.post_All_Shoes(response);
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add" component={Form} />
          <Route path="/edit/:id" component={Form} />
          {/* <Route exact path="/" component={Dashboard}>
            <Dashboard getAllTheShoes={this.getAllTheShoes} />
          </Route> */}
          <Route
            exact
            path="/"
            render={() => <Dashboard getAllTheShoes={this.getAllTheShoes} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { name, price, image } = state;
  return {
    name,
    price,
    image
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { get_All_Shoes, post_All_Shoes }
  )(App)
);
