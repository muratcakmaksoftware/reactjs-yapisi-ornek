import React from 'react';

class PagesComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.title = 'Admin Sayfalar';
    }

    componentWillMount(){

    }

    componentDidUpdate() {
        
    }

    render(){
        return(
            <h1>Pages</h1>            
        );
    }
}

export default PagesComponent;