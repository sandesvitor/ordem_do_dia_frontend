import React, { Component } from 'react'

export class Main extends Component {
    constructor(props){
        super(props)

        this.state = {}

        this.myFunction = this.myFunction.bind(this)
    }

    myFunction() {
        console.log('Funcioando!')
        }
    

    render() {
        return (
            <div className="main-section">
                <p>
                    <h1>SUA PRODUÇÃO MAIS EFICIENTE</h1>
                    <h2>ORDEM DO DIA NA PALMA DA SUA MÃO</h2>
                    <input type='button' id="btn-main" value="COMECE AGORA!" onClick = {this.myFunction}></input>
                </p>
                
            </div>
        )
    }
}

export default Main
