import React from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import Funcs from '../needs/Funcs';
import HttpService from '../needs/HttpService';
import { thisExpression } from '@babel/types';

class HeaderComponent extends React.Component {
    
    funcs;
    httpService;
    constructor(props){
        super(props);          
        this.funcs = new Funcs();
        this.httpService = new HttpService();
        this.state = {
            loginCheckRedirect:false, // admin sayfasında gezindiğinde admin ise hala gezebilecek değilse login atacak.
            adminCheckRedirect:false // login sayfası giriş yapıldığında adminse admin sayfasına yönlendirecek.
        }
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    componentDidUpdate() {
        //alert("update header");
    }

    loginHeader(){
        return "login header works";        
    }

    logoutEvent = () => {        
        this.logout();        
    }

    adminHeader(props){

        return (
            <div className="admin-Container">
                admin header works!
                <div className="admin-menu">
                    <ul>
                        <li><Link to="/admin">Admin</Link></li>
                        <li><Link to="/admin/pages">Sayfalar</Link></li>
                    </ul>                
                </div>
                
                <button onClick={props.logoutButton}>Logout</button>
            </div>
            
        );
    }

    userHeader(){
        return(
            <div className="header">
                user header works
                <div className="menu">
                    MENÜ
                    <ol>
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><Link to="/hakkimda">Hakkımda</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ol>
                </div>
                
            </div>
        );
    }

    checkAdmin(){
        if(localStorage.getItem("kadi") != null && localStorage.getItem("pw") != null)
        {
            let frmData = new FormData();
            frmData.append("kadi", localStorage.getItem("kadi"));
            frmData.append("pw", localStorage.getItem("pw"));

            this.httpService.post("login", frmData).then((data) => {
                console.log(data);
                if(data.sonuc == "yes"){
                    //Admin bilgileri güncelleniyor.
                    localStorage.setItem("id",data.mesaj[0].id);
                    localStorage.setItem("isim",data.mesaj[0].isim);
                    localStorage.setItem("kadi",data.mesaj[0].kadi);
                    localStorage.setItem("pw",data.mesaj[0].pw);
                    
                    if(this.funcs.pageType() == "login") //login sayfasındaysa admin ise admin sayfasına yönlendirme kalabilir.
                    {
                        this.setState({
                            adminCheckRedirect: true
                        });
                    }                    
                }
                else{                
                    //Bilgiler yanlış
                    this.logout();
                }
                
            });
        }
        else{
            if(this.funcs.pageType() != "login"){ // bu metot çalıştıysa login bilgileri yoksa ve login sayfasında değilse login sayfasına gönder.
                this.logout();
            }            
        }
    }

    logout(){
        localStorage.clear();
        this.setState({ //headercomponenti sabit olduğundan state sabit kalacak.
            loginCheckRedirect: true
        });
    }

    render(){
        const {loginCheckRedirect, adminCheckRedirect} = this.state;       

        if(loginCheckRedirect){         
            //header componenti login geçince didupdate çalışacak ancak içersindeki state verileri sabit kalacak bu yüzden =>
            this.state.loginCheckRedirect = false; // setState yapmıyoruz çünkü tekrar render atmaya gerek yok başlangıç değerini sıfırlıyoruz.
            return <Redirect to="/login" />
        }
        
        if(adminCheckRedirect){
            this.state.adminCheckRedirect = false;
            return <Redirect to="/admin" />
        }

        switch (this.funcs.pageType()) {
            case "admin":
                this.checkAdmin(); //loginCheckRedirect için admin bilgileri yanlışsa yada yoksa login yönlendirecek.
                return <this.adminHeader logoutButton={this.logoutEvent}/>;                
            case "login":
                this.checkAdmin(); // adminCheckRedirect için kişi adminse admin sayfasına yönlendirecek.
                return <this.loginHeader />;                
            default:
                return <this.userHeader />;                
        }
    }
}

export default withRouter(HeaderComponent); // withrouter = routerda değişiklik olduğunda update et.