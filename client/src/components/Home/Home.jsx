import React, { useEffect  } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Card from '../Card/Card'
import {getItem} from '../../actions/index'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';



export default function Home(){
    const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getItem())
},[dispatch])

const items = useSelector((state)=> state.items)
    
return(
    <div className="container">
            <Box sx={{ width: '100%', marginTop: 8}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {items?.map( el=>{ 
                        return <Card key= {el._id} id={el._id} info={el.info} name={el.name} price={el.price} waist={el.waist} image={el.image}  />
                    })}
                </Grid>
            </Box>
    </div>
    )
}