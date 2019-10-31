import React from 'react';
import './AboutComponent.css';

class AboutComponent extends React.Component {
    
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        document.title = 'Hakkımda';
    }

    componentWillMount(){

    }    

    myButton = (        
        <button onClick={this.handleClick}>Test Button</button>
    );



    handleClick() {
        alert("Test Button 1");
    }

    handleClick2 = () => { // bind gerekmez !
        alert("Test Button 2");
    }

    render(){
        return(
            <div id="hakkimda">
                <h1>Hakkımda Sayfası</h1> 
                {this.myButton}
                <br/>
                <button onClick={this.handleClick2}>Test Button Deneysel Olan</button>
            </div>
            
        );
    }
}

export default AboutComponent;