import React from 'react';

import Card from '@mui/material/Card';
import { CardMedia, CardContent } from '@mui/material';

const CardCustom = (props) => {

    return (
        <Card className="card">
            <CardMedia component="img" image={props.img} alt="Foto de perfil" />

            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
}

export default CardCustom;