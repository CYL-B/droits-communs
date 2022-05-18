import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Typography, Button, FormGroup, InputAdornment } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TextField from '@mui/material/TextField';


import { useEffect, useState } from "react";

export default function Footer() {

  const [email, setEmail] = useState("");

  useEffect(() => {

    const findArticles = async () => {
      const dataArticles = await fetch('/articles')
      const body = await dataArticles.json()
      
    }
    findArticles()
  }, [])


    const addToNewsletter = async () => {
      const dataMail = await fetch ('/newsletter', {
        method : 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
 body: `email=${email}`
      })

    }
  
    const handleSubmit = (e) =>{
      e.preventDefault(); 
    addToNewsletter()
    }
  
  return (
    <Box
      sx={{
        width: "100vw",
        height: 100,
        marginTop: "20px",
        backgroundColor: 'transparent',
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"

      }}
    >
      
      <Box component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          margin:"auto"
        }}
        noValidate
        autoComplete="off">
          <form>
        <TextField id="standard-basic" label="S'inscrire à la newsletter" variant="standard"
        onChange={(e)=> setEmail(e.target.value)}
        value={email} 
        InputLabel={{disableAnimation:"true"}}
        InputProps={{
          endAdornment:(
            <InputAdornment>
            <IconButton
        type="submit"
        edge="end"
        onClick={(e)=> handleSubmit(e)}><SendIcon color="primary"/></IconButton>
            </InputAdornment>
          )
        }}
        />
    
        </form>
      </Box>
      
      <Box sx={{ margin:"auto"}}>
        <Typography>(c)Tous droits réservés</Typography>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-around",
        margin:"auto"
      }}>
        <IconButton onClick={()=>window.open("http://facebook.com")} disableRipple={true}>
          <FacebookIcon />
        </IconButton>

        <IconButton onClick={()=>window.open("http://instagram.com")} disableRipple={true}>
          <InstagramIcon></InstagramIcon>
        </IconButton>
        <IconButton disableRipple={true} onClick={()=>window.open("http://twitter.com")}>
          <TwitterIcon></TwitterIcon>
        </IconButton>
        <IconButton disableRipple={true}>
          <RssFeedIcon></RssFeedIcon>
        </IconButton>

      </Box>
    </Box>
  );
}