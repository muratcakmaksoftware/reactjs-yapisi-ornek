import React from 'react';
import {withRouter} from "react-router-dom";
import Funcs from '../needs/Funcs';
class FooterComponent extends React.Component {
    
    funcs;
    constructor(props){
        super(props);
        this.funcs = new Funcs();
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    componentDidUpdate() {
        //alert("update footer");
    }

    adminFooter(){
        return "admin footer works";
    }

    loginFooter(){
        return "login footer works";
    }

    userFooter(){
        return "user footer works";
    }

    render(){
        switch (this.funcs.pageType()) {
            case "admin":                
                return <this.adminFooter/>;                
            case "login":
                return <this.loginFooter />;                
            default:
                return <this.userFooter />;
        }
    }

}

export default withRouter(FooterComponent); // withrouter = routerda değişiklik olduğunda update et.