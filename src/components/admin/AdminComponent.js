import React from 'react';

class AdminComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.title = 'Admin';
    }

    componentWillMount(){

    }

    componentDidUpdate() {
        //alert("update Admin");
    }

    render(){
        return(
            <h1>Admin</h1>            
        );
    }
}

export default AdminComponent;