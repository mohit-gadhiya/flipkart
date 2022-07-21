import {React, useState, useContext} from 'react'
import { Box,Button, Typography ,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {DataContext} from '../../context/DataProvider'
import Profile from '../Header/Profile'

//components
import LoginDialog from '../Login/LoginDialog';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    align-items: center;
    & > button , & > p , & > div {
        margin-right:40px;
        font-size: 16px;
        align-items: center;
    }
`
const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    border-radius: 2px;
    box-shadow: none;
    padding: 5px 40px;
    font-weight: 600;
    height: 30px;
`



const CustomButtons = () => {

  const [openDialog, setOpenDialog] = useState(false);
  
  const {account,setAccount} = useContext(DataContext);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  }

  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/>   : 
          <LoginButton variant="contained" onClick={() => toggleDialog()}>Login</LoginButton>
      }

      <Typography style={{width:'140px'}}>Become a Seller</Typography>

      <Typography>More</Typography>
      <Box style={{display: 'flex'}}>
        <ShoppingCartIcon style={{fontSize:'19px'}}/>
        <Typography style={{fontSize:'16px',marginLeft:'4px'}}>Cart</Typography>
      </Box>
      <LoginDialog open={openDialog} setOpen={setOpenDialog}/>
    </Wrapper>


  )
}

export default CustomButtons