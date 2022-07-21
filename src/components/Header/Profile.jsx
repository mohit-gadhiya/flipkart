import {Box,Typography,Menu,MenuItem,styled} from '@mui/material'
import {useState} from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 12px;
`
const Logout = styled(Typography)`
    margin-left:10px;
    cursor: pointer;
    font-size: 14px;
`
const Profile = ({account,setAccount}) => {
    
    const [open, setOpen] = useState(false);
    
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const logout = () => {
        setAccount('');
    }
  return (
    <>
        <Box><Typography onClick={handleClick} style={{cursor:'pointer'}}>{account}</Typography></Box>
        <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
            <MenuItem onClick={() => {handleClose(); logout();}}>
                <PowerSettingsNewIcon color='primary' fontSize='small'/>
                <Logout>Logout</Logout>
            </MenuItem>
        </Component>
    </>
  )
}

export default Profile