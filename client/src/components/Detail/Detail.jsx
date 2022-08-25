import React, { useEffect  } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { getDetail } from "../../actions/index";
import { useParams } from "react-router-dom";



import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderColor: 'black'
  });


export default function Details(props){
    const dispatch =  useDispatch()
    const { id } = useParams();


useEffect(()=>{
    dispatch(getDetail(id))
},[dispatch, id])

const details = useSelector((state) => state.detail)

        return (
            <div className="content" style={{marginTop:10}}>
            <Paper
              sx={{
                p: 2,
                margin: 'auto',
                marginTop:'10px',
                maxWidth: 900,
                flexGrow: 1,
                borderColor: 'blue',
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <Grid container spacing={2}>
                <Grid item >
                  <ButtonBase sx={{ width: 300, height: 300 }}>
                    <Img alt="complex" src={details.image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        <h4>{details.name}</h4>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        {details.info}
                      </Typography>
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        waist:{details.waist}
                      </Typography>
                      <Button variant="outlined" startIcon={<AddShoppingCartIcon />} style={{marginTop:10}}>add to cart</Button>
                    </Grid>
                    <Grid item>
                    <Typography variant="body2" color="text.secondary">
                        ID: {details._id},
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div">
                      ${details.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Button variant="contained" size="medium" style={{borderRadius:100, marginTop:10}} href='/'> Back</Button>   
            </div>
    )
}