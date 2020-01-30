import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  
  render() {
    return (
      <div>
        <Header />
        
        <div className="flexContainerLogin">
                <div class="wrapperLogin fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={require("../img/mm.png")} style={{"border": "2px solid black" , "width" : "55px"}}id="icon" alt="User Icon" />
                        </div>
                        <form id="formLogin" onSubmit={this.formSubmit}>
                            <input type="text" id="login" class="fadeIn second" value={this.state.login} onChange={this.onChange} name="login" placeholder="Identifiant" className='inputForm' />
                            <input type="password" id="password" class="fadeIn third" value={this.state.password} onChange={this.onChange} name="password" placeholder="Mot de passe" className='inputForm'/>
                            <input style= {{"backgroundColor" : "black", "borderRadius": "3px"}}type="submit" id="submitLogin" class="fadeIn fourth" value="Connexion" className='inputForm submitLogin'/>
                            {this.state.error}
                        </form>

                        <div id="formFooter" class="fadeIn fourth">
                            <a class="underlineHover" href="#" onClick={this.onCreateProfile}>Créer profil</a><br />
                            <a class="underlineHover" href="#">Mot de passe oublié ?</a><br />
                            <a class="underlineHover" href="#" onClick={this.onReturn}>Retour</a>
                        </div>
                    </div>
                </div>
            </div>
<Footer/>
      </div>
    )
  }
}


export default Login;
