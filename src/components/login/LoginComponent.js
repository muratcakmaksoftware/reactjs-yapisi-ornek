import React from 'react';
import loginStyle from './LoginComponent.css';
import HttpService from '../../needs/HttpService';
import { Redirect } from 'react-router-dom';

class LoginComponent extends React.Component {
    
    httpService;
    constructor(props){
        super(props);
        this.state = {
            kadi:'',
            pw:'',
            msgHidden:'none',
            redirect: false
        };
        this.httpService = new HttpService();
    }

    componentDidMount(){
        document.title = 'Login';
    }

    componentWillMount(){

    }

    componentDidUpdate() {
        //alert("update login");
    }

    updateField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login = () => {
        let frmData = new FormData();
        frmData.append("kadi", this.state.kadi);
        frmData.append("pw", this.state.pw);

        this.httpService.post("login", frmData).then((data) => {
            if(data.sonuc == "yes"){
                localStorage.setItem("id",data.mesaj[0].id);
                localStorage.setItem("isim",data.mesaj[0].isim);
                localStorage.setItem("kadi",data.mesaj[0].kadi);
                localStorage.setItem("pw",data.mesaj[0].pw);
                this.setState({
                    redirect: true
                });
            }
            else{                
                this.setState({
                    msgHidden:'block'
                });

                setInterval(() => { // 4 saniye sonra mesajı sil.
                    this.setState({
                        msgHidden:'none'
                    });
                },4000)
            }
            
        })
        .catch(console.log);
    }

    msg = "Kullanıcı Adı veya Şifre Yanlış!";
    render(){

        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to='/admin' />;
        }

        return(             
            <div>                
                <div className="login-form">
                    <form>
                        <h2 className="text-center">Log in</h2>       
                        <div className="form-group">
                            <input type="text" name="kadi" value={this.state.kadi} onChange={this.updateField} className="form-control" placeholder="Kullanıcı Adı" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pw" value={this.state.pw} onChange={this.updateField} className="form-control" placeholder="Şifre" required="required" />
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={this.login} className="btn btn-primary btn-block">Log in</button>
                        </div>
                        
                    </form>                    
                    <div className="alert alert-warning" role="alert" style={{display: this.state.msgHidden}}>
                        {this.msg}
                    </div>
                </div>  
            </div>
                    
        );
    }
}

export default LoginComponent;