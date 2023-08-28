import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './'
import fetchFromAPI from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

// let a='90vh'



const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect( () =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setVideos(data.items)
      // console.log(data)
    })
    
  }, [searchTerm]);


  return (
    <Box pl={5} sx={{overflowY:'auto',  height:'90vh', flex:2, display:"flex", flexDirection:'column'}  }>
      <Typography variant='subtitle1' fontWeight='500' mb={3} mt={4}>
        Search Results for <span style={{color: '#fc1503'}}>{searchTerm}</span> videos
      </Typography>
      {/* <Box pl={3}> */}
        <Videos videos={videos}/>
      {/* </Box> */}
    </Box>
)}


export default SearchFeed