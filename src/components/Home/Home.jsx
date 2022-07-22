import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box,styled } from '@mui/material'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
const Component = styled(Box)`
  padding:15px 10px;
  background: #F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
      <Navbar/>
      <Component>
        <Banner/>
        <MidSlide products={products} timer={true} title='Deal of the Day'/>
        <MidSection/>
        <Slide products={products} timer={false} title='Discounts for You'/>
        <Slide products={products} timer={false} title='Suggested Items'/>
        <Slide products={products} timer={false} title='Top Selections'/>
        <Slide products={products} timer={false} title='Trending Offers'/>
        <Slide products={products} timer={false} title="Season's Top Picks"/>
        <Slide products={products} timer={false} title='Top Deals on Accessories'/>
      </Component>
    </>

  )
}

export default Home