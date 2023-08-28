import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar, Videos} from './'
import fetchFromAPI from '../utils/fetchFromAPI'

// let a='90vh'



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Coding');
  const [videos, setVideos] = useState([]);

  useEffect( () =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)
      // console.log(data)
    })
    
  }, [selectedCategory]);


  return (
  <Stack 
    sx={{
      flexDirection: {
        sx: 'column',
        md: 'row'
      }
    }}
  >
    <Box sx={{
      height: {sx: 'auto', md: '92vh'}, 
      width: {sx: 'auto', md: '200px'},
      borderRight: '1px solid #3d3d3d' ,
      px: {sx:0, md: 1}
    }}>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* <Typography className="copyright" variant='body2' sx={{mt: 1.5, color:'#fff'}}>
        Copyright 2023 An Media
      </Typography> */}
    </Box>

    <Box p={2} sx={{overflowY:'auto',  height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2}>
        {selectedCategory} <span style={{color: '#fc1503'}}>Videos</span>
      </Typography>
      {/* <Box pl={4}> */}
        <Videos videos={videos}/>
      {/* </Box> */}

    </Box>
    {console.log(videos)}
    
  </Stack>    
)}


export default Feed