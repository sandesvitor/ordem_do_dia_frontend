import React, { Component } from 'react'

export class Rodape extends Component {
    state = {}

    render() {
        return (
            <div className="rodape-section">
                <div className="rodape-infos">
                    <ul>
                        <li>
                            <p>
                                <h1>CONTATOS</h1>
                                <h2>+55 21 99999999<br/>sandes@ordemdodia.com.br<br/>Tinder</h2>
                            </p>
                        </li>
                        <li>
                            <p>
                                <h1>SERVIÇOS</h1>
                                <h2>Entre em Contato<br/>Assine um Plano<br/>Dúvidas</h2>
                            </p>
                        </li>
                        <li>
                            <p>
                                <h1>INFORMAÇÕES</h1>
                                <h2>Venha Trabalhar Conosco<br/>Política de Privacidade<br/>Termos & Condições</h2>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="rodape-icons">
                    <a href="https:/www.instagram.com/"><img src="./instagram-logo.png" id="instagram-logo"></img></a>
                    <a href="https:/twitter.com/"><img src="./twitter-logo.png" id="twitter-logo"></img></a>
                    <a href="https:/www.facebook.com/"><img src="./facebook-logo.png" id="facebook-logo"></img></a>
                </div>
                <span className="rodape-brand">
                © ORDEM DO DIA 2020
                </span>
            </div>
        )
    }
}

export default Rodape