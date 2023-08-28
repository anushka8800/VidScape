import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, Stack, Avatar, Button } from '@mui/material'
import { Videos, ChannelCard } from './'
import fetchFromAPI from '../utils/fetchFromAPI'
import zIndex from '@mui/material/styles/zIndex'

const ChannelDetail = () => {

  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  // console.log(data.items[0])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  },[id])
  console.log(channelDetail,videos)
  
  return (
    
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
            zIndex: 10,
            height: '240px',
          }}

        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'>

        </ChannelCard>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '40px'}}}/>
        <Videos videos={videos} />
      </Box>
    </Box>

  )
}

export default ChannelDetail