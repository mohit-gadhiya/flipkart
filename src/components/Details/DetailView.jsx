import React from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getProductDetail} from '../../redux/actions/productActions'
import {useSelector} from 'react-redux'
import {Box, Typography, styled, Grid} from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)(({ theme }) => ({
    marginTop: "50px",
    [theme.breakpoints.down('lg')]: {
        marginLeft: "20px",
        marginTop: "0px"
    }
  }))


const DetailView = () => {
  
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const { loading, product } = useSelector(state => state.getProductDetail)
  const dispatch = useDispatch();
  const {id} = useParams();
  

  useEffect(() => {
    if(product && id !== product.id)
    dispatch(getProductDetail(id));
  },[dispatch,id,loading,product])

  return (
    <Component>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }   
        </Component>
  )
}

export default DetailView