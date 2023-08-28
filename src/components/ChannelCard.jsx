import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    // <div>
    //   {console.log("inside channel card: ")}
    //   {console.log(channelDetail)}
    //   </div>
    <Box
      sx={{ 
        boxShadow: 'none', 
        borderRadius: 0, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: { xs: '356px', md: '320px'},
        height: '280px',
        margin: 'auto',
        marginTop,

      }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white'
        }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ width: 180, height: 180, borderRadius: '50%', mb: 2}}
            />
            <Typography variant="subtitle1" 
              sx={{ fontWeight: 'bold', display:'flex' , alignItems:'center'}}
            >
              {channelDetail?.snippet?.title || 'Channel Title'}
              <CheckCircle sx={{ fontSize: 20, color: 'gray', ml: '5px'}} />

            </Typography>
            
            {channelDetail?.statistics?.subscriberCount &&(
              <Typography variant="subtitle2">
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() || '0'} Subscribers
              </Typography>
            )}
        </CardContent>
      </Link>
          
    </Box>
  )
}

export default ChannelCard