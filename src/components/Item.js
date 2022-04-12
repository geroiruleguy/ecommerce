import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import barritaAmarilla from './imgs/barra-agtal-original.jpg';
import {useNavigate,} from "react-router-dom";

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "white",
  },
};

export const Item = ({producto}) => {
  
  const path = useNavigate()
  const navegar = () => {
    path("/categories/item" + producto.id)
  }
  
  return(


    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {producto.img}
          alt="producto 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Producto 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $1.000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};



