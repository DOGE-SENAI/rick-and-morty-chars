import React from "react";
import { TextField } from "@mui/material";
import './style.css';

const Pesquisa = (props) => {

    return (
        <div className="container-search">
            <TextField id="outlined-search" label="Pesquise um personagem" type="search" 
            className="input-pesquisa"/>
        </div>
    );
}

export default Pesquisa;