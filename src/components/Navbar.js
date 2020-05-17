import React, { Component } from 'react'
import { Link } from 'react-scroll'

export class Navbar extends Component {
    state = {}

    render() {
        return (
            <div className="navbar">
                <p>
                    App Ordem do Dia
                </p> 
                <ul>
                    <li> 
                        <Link
                        activeClass="active"
                        to="recursos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Recursos
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="login"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Login
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="rodape"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Entrar
                        </Link>
                    </li>                                     
                </ul>
            </div>
        )
    }
}

export default Navbar
