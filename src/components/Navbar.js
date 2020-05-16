import React, { Component } from 'react'

export class Navbar extends Component {
    state = {}

    render() {
        return (
            <div className="navbar"> 
                <ul>
                    <li>Recursos</li>
                    <li>Login</li>
                    <li>Entrar</li>
                </ul>
            </div>
        )
    }
}

export default Navbar
