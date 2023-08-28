import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'

import React from 'react'
// import { Search } from '@mui/icons-material'
import SearchBar from './SearchBar'

const Navbar = () => (
    <Stack 
    direction='row' 
    alignItems='center'
    p={2} 
    sx={{ position:'sticky', background:'#000', top:0, justifyContent:'space-between'}}
    >
        <Link to='/' style={{ display: 'flex', alignItems:'center'}}>
            <img src={logo} alt="logo" height={45} />    
            <Typography variant='h5' fontWeight='bold' sx={{ color: '#fff', ml: 2}}>
                VidScape
            </Typography>
        </Link>

        <SearchBar />

    </Stack>

  )

export default Navbar