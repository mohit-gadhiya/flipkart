import { Grid,styled } from '@mui/material'


import {imageURL} from '../../constants/Data'

const Wrapper = styled(Grid)`
  margin-top:10px;
  display:flex;
  justify-content:center;
`
const Image = styled('img')(({theme})=>({
  width:'100%',
  marginTop:10,
  display: 'flex',
  justifyContent:'space-between',
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:200,
  }
}))


const MidSection = () => {
  
const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
      <Wrapper lg={12} sm={12} md={12} xs={12} container >
        {
          imageURL.map((image,index) => {
            return (
              <Grid lg={4} sm={12} md={4} xs={12} item key={index}>
                <img src={image} alt="" style={{width:'100%'}}/>
              </Grid>
            )
          })
        }
      </Wrapper>    
        <Image src={url} alt="" />
    </>
)
}

export default MidSection