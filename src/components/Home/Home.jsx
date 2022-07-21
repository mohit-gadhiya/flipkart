import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box,styled } from '@mui/material'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'

const Component = styled(Box)`
  padding:15px 10px;
  background: #F2F2F2;
`

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
      <Navbar/>
      <Component>
        <Banner/>
      </Component>
    </>

  )
}

export default Home