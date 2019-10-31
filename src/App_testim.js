import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';


import {BrowserRouter as Router, Route} from "react-router-dom";
import RouterComponent from './RouterComponent';
import HeaderComponent from './theme/HeaderComponent';
import FooterComponent from './theme/FooterComponent';

/* // props çağrılması this. ile başlar props tanımlı arkaplanda.
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}*/

function App() {

  //BİLEŞEN PROPS
   /*
    **Bileşenlerin isimlerini Büyük harfle yazmalıyız çünkü dom olarak okuyabilir.
    props(properties) 
    <Welcome name="Murat" /> // örnek bileşen çağırma kodu.
    name çift taraflı kullanabileceğinden. props yapılmış.
    ***
    Sınıf bileşenleri, fonksiyon bileşenlerine göre bazı ek özelliklere sahiptirler. Buna sonraki bölümlerde değineceğiz. 
    Fakat şimdilik, kısa olması açısından fonksiyon bileşenleri kullanacağız.
  */ 
  function Welcome(props) { // ve class Welcome extends React.Component { aynı.
    return <h1>Hello, {props.name}</h1>;
  }

// BİLEŞEN STATE
/*
  Sınıf olarak oluşturulan bileşenlerin, fonksiyon bileşenlerine göre bazı ek özelliklerinin bulunduğundan bahsetmiştik. 
  Bahsettiğimiz ek özellik yerel state değişkenidir ve sadece sınıf bileşenlerine özgüdür.
*/

 

  //JSX element oluşturma
  const element = (
    <h1>TEST1</h1>
  );

  //Örnek Data
  /*
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };*/

  function componentDidMount() {
    alert("test");
  }

  function componentWillUnmount() {

  }

  return ( //Return de te bir html geri gönderecek o yüzden div main oluşturuyoroz ve tek div içerisindeki herşeyle geri gidecek.   
    /*
    <div className="abc">
      {element}
    </div>,
    <Welcome name="Murat" />,
    <Clock />*/
    ///////////////////////////////////////////////////////////////////////////////

    <Router>       
      <HeaderComponent />
      <RouterComponent />
      <FooterComponent />      
    </Router>
    
  );
}

export default App;


/* Bileşenleri içe içe veri aktarma props
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);*/