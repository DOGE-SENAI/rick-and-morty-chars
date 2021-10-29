// import React, { useEffect, useState } from 'react';
// import { Typography } from '@mui/material';

import Estrutura from '../../components/Estrutura';
// import Pesquisa from '../components/Pesquisa';
// import CardCustom from '../components/Card';

// import api from '../services/api';

//TODO: PASSAR STRING DE PESQUISA; TERMINAR NOVA MANIPULAÇÃO DE DADOS; ARRUMAR VISUALIZAÇÃO DOS CARDS.

const Home = () => {
    // function mostrarCards(data) {
    //     try {
    //         const listChars = data["results"];
    //         const cardsDiv = document.getElementById("cards-container");

    //         for (const char in listChars) {
    //             cardsDiv.appendChild(
    //                 <CardCustom img={listChars[char]["image"]}>
    //                     <h5>{listChars[char]["name"]}</h5>

    //                     <h5>Status:</h5>
    //                     <p>{listChars[char]["status"]}</p>

    //                     <h5>Specie:</h5>
    //                     <p>{listChars[char]["species"]}</p>

    //                     <h5>Gender:</h5>
    //                     <p>{listChars[char]["gender"]}</p>

    //                     <h5>Origin:</h5>
    //                     <p>{listChars[char]["origin"]["name"]}</p>

    //                     <h5>Location:</h5>
    //                     <p>{listChars[char]["location"]["name"]}</p>
    //                 </CardCustom>
    //             );
    //         }

    //         document.getElementById("texto-inicial").style.display = "none";
    //         cardsDiv.style.display = "block";
    //     } catch (err) {
    //         console.error("Erro: " + err);
    //     }
    // }

    // const [listChars, setListChars] = useState();

    // useEffect(() => {
    //     api.get(`${a}`)
    //         .then(response => setListChars(response.data.results))
    //         .catch(err => {
    //             alert("Aconteceu um erro!");
    //             console.log("Erro: " + err);
    //         })

    // }, []);

    return (
        <Estrutura>
            {/* <Pesquisa func={Pesquisa()} />

            <div className="cards-container">
                {
                    listChars.map(char => (
                        <h5>{char.name}</h5>
                    ))
                }
            </div> */}
            oi
        </Estrutura>
    );
}

export default Home;