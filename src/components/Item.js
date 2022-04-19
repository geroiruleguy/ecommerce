import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

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
  
  // const path = useNavigate()
  // const navegar = () => {
  //   path("/categories/item" + producto.id)
  // }
  
const URL = `/producto/${producto.id}`

  return(


    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {producto.img}
          alt= {producto.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={URL}>
          <Button size="small" color="primary">
            Agregar al carrito
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};



