import React, { Component } from 'react'

export class Main extends Component {
    state = {}

    myFunction() {}

    render() {
        return (
            <div className="main-section">
                <p>
                    <h1>SUA PRODUÇÃO MAIS EFICIENTE</h1>
                    <h2>ORDEM DO DIA NA PALMA DA SUA MÃO</h2>
                    <input type='button' id="btn-main" value="COMECE AGORA!" onClick='myFunction()'></input>
                </p>
                
            </div>
        )
    }
}

export default Main
