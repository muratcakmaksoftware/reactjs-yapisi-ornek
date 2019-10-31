import React from 'react';
import {Route} from "react-router-dom";

//Components
import IndexComponent from './components/index/IndexComponent';
import AboutComponent from './components/about/AboutComponent';
import LoginComponent from './components/login/LoginComponent';
import AdminComponent from './components/admin/AdminComponent';
import PagesComponent from './components/admin/pages/PagesComponent';

class RouterComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    componentDidUpdate() {
        //alert("update router");
    }

    render(){
        return(
            <div className="icerik">
                <Route exact path='/' component={IndexComponent} />
                <Route exact path='/hakkimda' component={AboutComponent}/>
                <Route exact path='/login' component={LoginComponent} />                               
                <Route exact path='/admin' component={AdminComponent} />
                <Route exact path='/admin/pages' component={PagesComponent} />
            </div>
                
        );
    }
}

export default RouterComponent;