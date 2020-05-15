import React, { Component } from 'react'
import { ContentAddBox } from 'material-ui/svg-icons'
import { MuiThemeProvider } from 'material-ui/styles'
import check from 'material-ui/svg-icons/navigation/check'

export class Login extends Component {
    state = {}

    render() {
        return (
            <div className="login-section">
                <div class="login-box">
                    <p>
                        <h1>Aguarde o lançamento</h1>
                        <h2>Inscreva-se para saber mais notícias</h2>
                    </p> 
                    <input type="text" id="txt-enviar" placeholder="Digite seu email"/>   
                    <input type="button" id="btn-enviar" value="Enviar" />            
                </div>            
            </div>
        )
    }
}

export default Login
