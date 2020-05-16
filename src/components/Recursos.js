import React, { Component } from 'react'

export class Recursos extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
               
                    <div className="recursos-section">                 
                        <ul>
                            <li> 
                                <img src="./cloud-item.png" className="recursos-img" />
                                <p>ACESSO RÁPIDO A PARTIR<br/>DE QUALQUER DISPOSITIVO</p>
                            </li>               
                            <li> 
                                <img src="./analise-item.png" className="recursos-img" />
                                <p>ANÁLISE TÉCNICA COM<br/>ROTEIRO INTEGRADO</p>
                            </li> 
                            <li> 
                                <img src="./ordem-item.png" className="recursos-img" />
                                <p>ENVIE SUA ORDEM DO DIA<br/>DIRETAMENTE DO APLICATIVO</p>
                            </li> 
                        </ul>                           
                    </div>
                    <div className="sub-recursos">
                        <ul>
                            <li>
                                <p>Acesse rapidamente através do seu<br/>computador, tablet ou até mesmo do seu<br/>celular</p>
                            </li>
                            <li>
                                <p>Adicionando o seu roteiro ao programa você<br/>poderá analisar palavras por palavra os<br/>elementos que você gostaria de incluir nas<br/>suas listas.</p>
                                <p>Você também pode criar, editar e guardar<br/>categorias e elementos que vão se alterando<br/>durante a produção.</p>
                            </li>
                            <li>
                                <p>Organiza suaprópria agenda de contatos e<br/>envie os documentos diretamente para cada<br/>integrante da sua equipe de forma personalizada</p>
                            </li>
                        </ul>
                    </div>
    
            </React.Fragment>
        )
    }
}

export default Recursos
