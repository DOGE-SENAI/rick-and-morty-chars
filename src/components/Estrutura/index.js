import React from 'react';
import Topo from '../Topo';
import Rodape from '../Rodape';

const Estrutura = (props) => {
    return(
        <main>
            <Topo />
                {props.children}
            <Rodape />
        </main>
    );
}

export default Estrutura;