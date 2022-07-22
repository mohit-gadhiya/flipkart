import React from 'react'
import {Box,styled, Typography} from '@mui/material';

import { NavData } from '../../constants/Data';

const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
  margin: '55px 215px 0 215px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]:{
    margin: '0'
  }
}))
const Component = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`

const Navbar = () => {
  return (
    <Wrapper>
      {NavData.map((item, index) => {
        return (
          <Component key={index}>
            <img src={item.url} style={{width:64}} alt='nav'/>
            <Text>{item.text}</Text>
          </Component>
        )
      })}
    </Wrapper>
  )
}

export default Navbar