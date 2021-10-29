import React, { Component } from 'react';

import Estrutura from '../../components/Estrutura';
import Pesquisa from '../../components/Pesquisa';
import CardCustom from '../../components/Card';
import { Button } from '@mui/material';

import api from '../../services/api';
import './style.css'

//TODO: PASSAR STRING DE PESQUISA; TERMINAR NOVA MANIPULAÇÃO DE DADOS; ARRUMAR VISUALIZAÇÃO DOS CARDS.

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listChars: [],
            pesquisar: () => { }
        }
    }

    componentDidMount() {
        this.setState({
            pesquisar: () => {
                const input = document.getElementById("outlined-search");
                const divCards = document.getElementById("cards");
                const divTxt = document.getElementById("txtInicial");

                api.get(`?name=${input.value}`)
                    .then(response => {
                        this.setState({ listChars: response.data["results"] })
                        divTxt.style.display = "none";
                        divCards.style.display = "block";
                    })
                    .catch(err => {
                        divTxt.innerHTML = '<h1>Não achamos nenhum resultado :c</h1>';
                    });
            }
        });
    }

    render() {
        return (
            <Estrutura>
                <article className="container-main-content">
                    <div className="input-area">
                        <Pesquisa />
                        <Button variant="contained" className="btnPesquisar" onClick={this.state.pesquisar}>Pesquisar</Button>
                    </div>
                    
                    <div id="cards" className="cards-container">
                        {
                            this.state.listChars.map(char => (
                                <CardCustom img={char.image}>
                                    <h4>Nome: {char.name}</h4>
                                    <h4>Status: {char.status}</h4>
                                    <h4>Specie: {char.species}</h4>
                                    <h4>Gender: {char.gender}</h4>
                                    <h4>Origin: {char.origin.name}</h4>
                                    <h4>Location: {char.location.name}</h4>
                                </CardCustom>
                            ))
                        }
                    </div>

                    {/*########## Apresentação Inicial do Home ##########*/}
                    <section id="txtInicial" className="container-main-banner">
                        <h1>Search for a Rick and Morty character</h1>
                    </section>
                </article>
            </Estrutura>
        );
    };

}

export default Home;