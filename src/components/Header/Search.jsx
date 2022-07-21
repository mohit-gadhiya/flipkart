import { InputBase,styled,Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
  margin-left: 12px;
  background: #fff;
  width: 34%;
  border-radius: 2px;
  display: flex;
`
const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 20px;
    font-size: unset;
    font-size: 16px;
`
const SearchIconWrapper = styled(Box)`
    padding-top:1px;
    padding-right:5px;
    color:#2874f0;
    display: flex;
`

const Search = () => {
  return (

    <SearchContainer>
        <InputSearchBase placeholder="Search for products, brands and more"/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SearchContainer>

)}
export default Search