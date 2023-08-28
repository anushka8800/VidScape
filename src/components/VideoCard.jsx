import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl, demoChannelUrl} from '../utils/constants'

const VideoCard = ({video: {id: {videoId }, snippet}}) => {
  let thumbnailUrl = snippet?.thumbnails?.high?.url
  if(thumbnailUrl) thumbnailUrl = thumbnailUrl.replace(/ =>/g, ':')
  // console.log("inside VideoCard")
  // console.log(thumbnailUrl)
  return (
      <Card sx={{ 
        width: { xs: '100%', sm:'358px', md: '320px'}, 
        boxShadow:'none', 
        borderRadius: 0
        }}>

        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <CardMedia 
            image={thumbnailUrl} 
            alt={snippet?.title}
            sx={{  width: {xs: '100%', sm: '358px', md:'320px'}, height: 180 }}
          />
        </Link>

        <CardContent sx={{ backgroundColor: 'rgba(0,0,0)', height: '80px'}} >
          <Link to={videoId ? '/video/${videoId}': demoVideoUrl}>
            <Typography variant="subtitle1" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={snippet?.channelId ? '/channel/${snippet?.channelId}': demoChannelUrl}>
            <Typography variant="subtitle2" 
              sx={{ color: 'gray', textDecoration: 'none', fontWeight: 'bold', display:'flex' , alignItems:'center' }}
            >
              {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}} />
            </Typography>
          </Link>
        </CardContent>
      </Card>      
  )
}

export default VideoCard