import {React, useState, useContext} from 'react'
import { Dialog,Box, TextField,Button,Typography,styled } from '@mui/material'
import { authenticateSignup,authenticateLogin } from '../../service/Api.js'
import { DataContext } from '../../context/DataProvider.jsx'

const Component = styled(Box)`
    display: flex;
    width: 90vh;
    height: 70vh;
`
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 86%;
    width: 28%;
    padding: 40px 35px;
    & > h5, & > p {
        color: #fff;
        font-weight: 600;
    };
    & > p {
        margin-top: 20px;
    }

`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: 25px 35px;
    flex:1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    background: #FB641B;
    text-transform: none;
    height: 48px;
    color: #fff;
    border-radius: 2px;  
    &:hover {
        background: #2874f0;
        color: #fff;
    }
`
const RequestOTP = styled(Button)`
    background: #fff;
    text-transform: none;
    height: 48px;
    color: #2874f0;
    border-radius: 2px;  
    box-shadow: 0 2px 4px 0 rgb(0, 0, 0, 20%);
`
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    cursor: pointer;
    font-weight:600;
`
const Error = styled(Typography)`
    font-size:14px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`
const accountInitialValues = {
    login:{
        view:'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Whishlist and Recommendations',
    },
    signup:{
        view:'signup',
        heading: 'Looks like you are new here!',
        subHeading: 'Signup with your mobile number to get started',
    }

}
const signupInitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const loginInitialValues = {
    username:'',
    password:''
}

const LoginDialog = ({open,setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    const {setAccount} = useContext(DataContext);    

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
        setError(false);
    }
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }
    const onInputChange = (e) => {
        setSignup({...signup,[e.target.name]:e.target.value})
    }
    const signupUser = async () => {
       const response = await authenticateSignup(signup);
       if(!response) return;
       handleClose();
       setAccount(signup.firstname)
    }
    const onValueChange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const loginUser = async () => {
        const response = await authenticateLogin(login);
        if(response.status === 200){
            handleClose();
            setAccount(login.username);
        }else{
            setError(true)
            if(!response) return;
        }
    }
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
            <Image>
                <Typography variant="h5">{account.heading}</Typography>
                <Typography>{account.subHeading}</Typography>
            </Image>
            {
                account.view === 'login' ?
            <Wrapper>
                <TextField onChange={(e) => onValueChange(e)} name='username' label="Enter Username" variant="standard" />
                
                {error && <Error>Please enter username or password</Error>}

                <TextField onChange={(e) => onValueChange(e)} name='password' label="Enter Password" variant="standard" />
                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                <LoginButton onClick={()=> loginUser()}>Login</LoginButton>  
                <Typography style={{textAlign: 'center'}}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
                <TextField name='firstname' onChange={(e)=> onInputChange(e)} label="Enter Firstname" variant="standard" />
                <TextField name='lastname' onChange={(e)=> onInputChange(e)} label="Enter Lastname" variant="standard" />
                <TextField name='username' onChange={(e)=> onInputChange(e)} label="Enter Username" variant="standard" />
                <TextField name='email' onChange={(e)=> onInputChange(e)} label="Enter Email" variant="standard" />
                <TextField name='password' onChange={(e)=> onInputChange(e)} label="Enter Password" variant="standard" />
                <TextField name='phone' onChange={(e)=> onInputChange(e)} label="Enter Phone" variant="standard" />
                <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
            </Wrapper>
    }   
        </Component>
    </Dialog>
  )
}

export default LoginDialog