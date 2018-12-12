import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Form from "./component/Form/Form";
import Dashboard from './component/Dashboard/Dashboard';
import Header from "./component/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Switch>
       <Route path= "/add" component={Form}/>
       <Route path= "/edit/:id" component={Form}/>
       <Route exact path= "/" component={Dashboard}/>



      </Switch>
     
          
      </div>
    );
  }
}

export default App;
