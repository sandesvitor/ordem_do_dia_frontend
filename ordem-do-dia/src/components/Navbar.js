import React, { Component } from 'react'

export class Navbar extends Component {
    state = {}

    render() {
        return (
            <div className="navbar"> 
                <ul>
                    <li>Main</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </div>
        )
    }
}

export default Navbar
