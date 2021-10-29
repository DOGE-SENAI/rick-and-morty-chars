import React from 'react';

import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';

import './style.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const CardCustom = (props) => {

    const theme = createTheme({
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor:'#2F4368',
                        color: 'white'
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Card className="card">
                <CardMedia className="card-img" component="img" image={props.img} alt="Foto de perfil" />

                <div className="card-content">
                    {props.children}
                </div>
            </Card>
        </ThemeProvider>
    );
}

export default CardCustom;