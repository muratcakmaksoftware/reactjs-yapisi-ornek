import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route,withRouter } from "react-router-dom";
import RouterComponent from './RouterComponent';
import HeaderComponent from './theme/HeaderComponent';
import FooterComponent from './theme/FooterComponent';

class App extends React.Component { //function App() {

  constructor(props){
    super(props);
  }

  componentDidMount(){    
  }

  componentWillMount(){
  }

  componentDidUpdate() {
    //alert("update app");
  }
  
  render(){
    
    return (
      <Router>      
        <HeaderComponent />
          <RouterComponent />
        <FooterComponent />      
      </Router>

    );
  }
  

}

export default App;