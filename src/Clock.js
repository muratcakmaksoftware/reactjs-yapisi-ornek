import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {date: new Date()};        
    }

    componentDidMount() { // eklendiğinde
        this.timerID = setInterval( // timer yaratılıyor
            () => this.tick(),
            1000
        );  
    }

    componentWillUnmount() { // silindiği veya çıkarıldığı
        clearInterval(this.timerID); // timer siliniyor.
    }

    tick() {
        this.setState({ // render eder.
            date: new Date()
        });
    }

    render() {
        return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

export default Clock;


/*
// Yanlış kullanım
this.setState({ // props kaynaklı.
  counter: this.state.counter + this.props.increment,
});

// Doğru kullanım
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

veya aynı olan

// Doğru kullanım
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});

*/