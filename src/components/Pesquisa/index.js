import React from "react";
import { TextField, Button } from "@mui/material";

const Pesquisa = (props) => {

    return (
        <div>
            <TextField id="outlined-search" label="Pesquise um personagem" type="search"
                className="input-pesquisa"/>
            <Button variant="contained" onClick={props.func}>Pesquisar</Button>
        </div>
    );
}

export default Pesquisa;