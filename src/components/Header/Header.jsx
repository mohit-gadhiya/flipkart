import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//components
import Search from './Search'
import CustomButton from './CustomButtons'

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component = styled(Box)`
    margin-left: 15%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const CustomButtonWrapper = styled(Box)`
    margin: 0 11% 0 auto
`
const Header = () => {
    const logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const subLogo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' 
  return (
    <StyledHeader>
        <Toolbar style={{minHeight:"55px"}}>
            <Component>
                <img src={logo} alt="logo" style={{width:75}}/>
                <Box style={{display: 'flex'}}>
                    <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color:"#FFE500"}}>Plus</Box>
                    </SubHeading>
                    <img src={subLogo} alt="subLogo" style={{width:10,height:10,marginLeft:4}}/>
                </Box>
            </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButton/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
    )
}

export default Header