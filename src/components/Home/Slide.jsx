import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Box,Typography,styled, Button, Divider } from '@mui/material';
import Countdown from 'react-countdown'
import {Link} from 'react-router-dom'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  gap: 10px;
`
const Dealtext = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right:25px;
  line-height: 32px;

`
const ViewAllBtn = styled(Button)`
  font-size: 13px;
  margin-left: auto;
  background: #2874f0;
  border-radius: 2px;
  font-weight: 600;
`
const Image = styled('img') ({
  width:'auto',
  height: '150px'
})
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`


const Slide = ({products,timer,title}) => {

  const timeImg = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'
  const renderer = ({hours, minutes, seconds}) => {
    return <Box>{hours} : {minutes} : {seconds} Left</Box>
  }
  return (
    <Component>
      <Deal>
        <Dealtext>{title}</Dealtext>
        {
          timer && 
          <Box style={{display: 'flex',marginLeft:10,alignItems: 'center',color:'#7f7f7f'}}>
            <img src={timeImg} alt="time-image1" style={{width:'24px',marginRight:10}}/>
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
          </Box>
        }
        <ViewAllBtn variant="contained" color="primary">View All</ViewAllBtn>
      </Deal>
      <Divider/>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
          products.map((product,index) =>(
            <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}} >
              <Box textAlign='center' style={{padding: '25px 20px'}} key = {index}>
                <Image src={product.url} alt='product' key={index}/>
                <Text style={{fontWeight:600, color:'#212121'}}>{product.title.shortTitle}</Text>
                <Text style={{color:'green'}}>{product.discount}</Text>
                <Text  style={{color:'#212121',opacity:'0.6'}}>{product.tagline}</Text>
              </Box>
            </Link>
          ))
        }
      </Carousel>
    </Component>
  )
}

export default Slide