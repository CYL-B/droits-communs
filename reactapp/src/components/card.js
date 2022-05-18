import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box, Badge } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { Link } from 'react-router-dom';

import { useState } from 'react';


export default function ArticleCard(props) {
const[like, setLike] = useState("secondary")
const[count, setCount] = useState(0)

    let colorShadow
    if(props.cardShadow === "pink"){
        colorShadow = "-20px -10px #E381CD"
    } else{
        colorShadow = "-20px -10px #FFC726"
    }

    const addToFavorite = () =>{

      if(like == "secondary")
      {setLike("warning")
      setCount(count+1)} else{
        setLike("secondary")
        setCount(count-1)
      }

     

    }


    return (
      <Box>
        <Card {...props} sx={{width: 400, boxShadow : colorShadow, maxHeight:400}}>
       <Link to={`/Article/${props.id}`}><CardHeader
            title={props.title}
            sx={{fontWeight: 700}}
            subheader={props.date}
            
            
          ></CardHeader></Link>
          <CardMedia
            component="img"
            height="150"
            image={props.img}
            alt={props.alt}
          />
          
          <CardActions disableSpacing sx={{display:"flex",  justifyContent: 'space-around'}}>
          <Avatar alt="Remy Sharp" src="/avatar.jpeg" />
            <IconButton color={like} onClick={()=>addToFavorite()} aria-label="add to favorites">
              <Badge badgeContent={count} color="primary" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}><FavoriteIcon /></Badge>
            </IconButton>
            <IconButton color="secondary" aria-label="share">
              <ShareIcon />
            </IconButton>
            <Typography>{props.read}</Typography>
            <IconButton color="secondary" aria-label="comment">
              <ChatBubbleIcon />
            </IconButton>
          </CardActions>
          
        </Card>
        </Box>
      );
}
