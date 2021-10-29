import React, { useRef } from "react";
import { TextField, Button } from "@mui/material";

const Pesquisa = (props) => {
    const inputBusca = useRef();

    return (
        <div>
            <TextField id="outlined-search" label="Pesquise um personagem" type="search"
                className="input-pesquisa" ref={inputBusca}/>
            <Button variant="contained" onClick={props.func}>Pesquisar</Button>
        </div>
    );
}

export default Pesquisa;