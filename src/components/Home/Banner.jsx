import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { BannerData } from '../../constants/Data'
import {styled} from '@mui/material'


const Image = styled('img')(({theme})=>({
  width: '100%',
  height: '280px',
  [theme.breakpoints.down('md')]: {
    height: '180px'
  }
}))

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">

      {
        BannerData.map((item, index) => {
          return(
            <Image src={item.url} alt="banner" key={index}/>
          )
        })
      }
    </Carousel>
    )
}

export default Banner