import { Box, Button, styled } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  marginRight: '5%',
  [theme.breakpoints.down('lg')]: {
      padding: '20px',
      minWidth: '100%',
      margin: '0 auto'
  }
}))

const Image = styled('img')({
  padding: '15px 20px',
  border: '1px solid #f0f0f0',
  width: '95%'
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "49%",
  borderRadius: "2px",
  height: "50px",
  color: "#FFFFFF",
  [theme.breakpoints.down('md')]: {
      width: "46%",
  }
}))

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('md')]  : {
    justifyContent: 'space-around',

  }
}))

const ActionItem = ({product}) => {
  return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <ButtonContainer >
              <StyledButton  style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
              <StyledButton style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
            </ButtonContainer>
        </LeftContainer>  )
}

export default ActionItem