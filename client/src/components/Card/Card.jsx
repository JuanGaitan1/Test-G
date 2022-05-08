import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';

export default function Cards ({id, info, name, price, waist, image}){
    return (
    <Container maxWidth="xs">
        <Card sx={{maxWidth: 500, marginBottom:5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt="not found"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {info}  {waist}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" href={'/api/' + id}>Details</Button>
      </CardActions>
    </Card>
    </Container>
  );
}