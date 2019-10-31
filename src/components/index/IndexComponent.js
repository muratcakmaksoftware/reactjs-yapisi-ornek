import React from 'react';

class IndexComponent extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.title = 'Ana Sayfa';
    }

    componentWillMount(){

    }

    componentDidUpdate() {
        //alert("update index");
    }

    render(){
        return(
            <h1>Ana Sayfa</h1>            
        );
    }
}

export default IndexComponent;