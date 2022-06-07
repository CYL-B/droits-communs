import { Grid, Box, Paper, IconButton, Badge } from "@mui/material";
import NavBar from "../components/navbar"
import Footer from "../components/footer";
import ModeSwitch from "../components/switch";
import MainDivider from "../components/divider";
import { ArtCard, MiniArticleCard } from "../components/articleCard";

/*REDUX*/
import { connect } from 'react-redux';

import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';

import HeadsetIcon from '@mui/icons-material/Headset';
import TextField from '@mui/material/TextField';
import StyledButton from "../components/button";

import FavoriteIcon from '@mui/icons-material/Favorite';



import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom"

//Social medias


function Article(props) {

 //id récupéré des params
    const { id } = useParams();
//informations pour chaque commentaire
    const [comment, setComment] = useState("");
    const [name, setName] = useState("")
    const[comments, setComments] = useState([])

//informations de l'article
    const [mainArticle, setMainArticle] = useState({})
//états liés au like
    const[like, setLike] = useState("secondary");
    const[count, setCount] = useState(0)

//récupère la valeur de l'input commentaire
    

    //permet de trouver l'article à afficher
    useEffect(() => {

        const findArticle = async () => {
            const dataArticle = await fetch(`/target-article/${id}`)
            const body = await dataArticle.json()

            setMainArticle(body.articleFound)
            setCount(body.articleFound.favorite)
            setComments(body.articleFound.comments)

        }
        findArticle()
    }, [])

//modifie les informations de l'article en BDD (comment)
   
       const changeArticle = async () => {
        const dataArticle = await fetch('/add-comment', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `comment=${comment}&id=${id}&name=${name}`
        })
        const retour = await dataArticle.json()
        
    
      }


    const handleChange = () => {
       
       changeArticle()
    };

//modifier les infos de l'article en BDD (likes)
useEffect(()=> {
    const changeFavorites = async () => {
    console.log("check", count)
    const dataArticle = await fetch('/add-favorite', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `id=${id}&count=${count}`
    })
    const retour = await dataArticle.json()
    

  }
  changeFavorites()
},[count])


    /* appel de la fonction FB permettant de partager un post*/
    const FB = window.FB

    const facebookFunction = () => {
        FB.ui({
            display: 'popup',
            method: 'share',
            href: 'https://developers.facebook.com/docs/',
        
          }, function(response){});
    }
//mécanisme du like qui s'enclenche au click sur le coeur
    const addToFavorite = () =>{

        if(like == "secondary")
        {setLike("warning")
        setCount(count+1)
    props.Like();
    
    } else{
          setLike("secondary")
          setCount(count-1)
          props.Dislike()
          
        }
  
       
  
      }

      var commentsToDisplay = comments.map((info, i)=>{
          return(
<Paper key={i} sx={{ margin: "20px", backgroundColor: "white", width: "75%", height: "auto", marginY: "50px" }}>
                    <Typography variant="body1" sx={{ padding: "10px", fontWeight: 800 }}>{info.name}</Typography>
                    <Typography variant="body1" sx={{ padding: "10px" }}>{info.content}</Typography>
                    <Typography variant="body1" sx={{ padding: "10px" }}>{info.dateComment}</Typography>
                </Paper>
          )
      })
  
    return (
       <Box>
            <NavBar></NavBar>
            <MainDivider orientation="horizontal"></MainDivider>

            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "start" }}>



                <Box>

                    <ArtCard img={mainArticle.image} title={mainArticle.title} subtitle={mainArticle.subtitle}></ArtCard>
                    <Box sx={{
                        bgcolor: 'background.default',
                        height: "auto",
                        width: "170px",
                        opacity: "0.7"
                    }}>
                        <Paper elevation={12}>
                            <Typography variant="body1">

                                Publié le {mainArticle.date_published}
                            </Typography> <Typography variant="body1">

                                Auteur : {mainArticle.author}
                            </Typography>
                            <Typography variant="body1">
                                Ecoute
                            </Typography>
                            <HeadsetIcon sx={{ color: "#FFC726" }} />
                            <Typography variant="body1">

                                Like
                            </Typography>
                           
              <Badge badgeContent={count} color='primary' anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}><FavoriteIcon color="warning"/></Badge>
                            <Box sx={{ display: "flex" }}>
                               
                            </Box>
                        </Paper>
                    </Box>
                    
                    <Box
                        sx={{
                            bgcolor: 'background.default',
                            height: "180px",
                            width: "760px",
                            height: "auto",
                            opacity: "0.7"
                        }}>
                        <Paper elevation={12}><Typography variant="body1" sx={{ padding: "50px", textAlign: "justify;" }}></Typography>{mainArticle.content}</Paper>


                    </Box>

                    

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                display:"flex",
                                flexDirection:"column"
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
          value={name}
          sx={{ background: "white", borderRadius: "15px" }}
          onChange={(e) => setName(e.target.value)}
        />
                            <TextField
                                id="standard-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                variant="filled"
                                sx={{ background: "white", borderRadius: "15px" }}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <StyledButton handleClick={handleChange} color="yellow" size="md" title="Poster"></StyledButton>
                        </Box>
                        <Box>
                            <Typography>Partagez : </Typography>
                            <IconButton onClick={()=>facebookFunction()}>
                                <FacebookIcon color="primary" fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon></TwitterIcon>
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon></LinkedInIcon>
                            </IconButton>
                            <IconButton>
                                <ShareIcon></ShareIcon>
                            </IconButton>
                            <Typography>Avez-vous aimé cet article ? </Typography>
                            <IconButton color={like} onClick={()=>addToFavorite()} aria-label="add to favorites">
              <Badge color="primary" anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}><FavoriteIcon /></Badge></IconButton>

                            
                        </Box>

                    </Box>

                </Box>




            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <StyledButton size="md" title="Suivant"></StyledButton>
                <StyledButton size="md" title="Précédent" color="yellow"></StyledButton>
            </Box>

            <Box sx={{ marginY: "80px" }}>
                <Paper elevation={0} sx={{
                    display: "flex",
                    backgroundColor: "rgb(255, 255, 255, 0.50)",
                    height: "auto",
                    width: "100vw",
                    paddingX: "40px",
                    paddingY: "30px",
                    position: 'relative'

                }}>
                    <Paper

                        sx={{ backgroundColor: "#FFC726", width: "180px", height: "50px", borderRadius: 0, boxShadow: "none", position: "absolute", top: "-30px", left: "30px" }}>
                        <Typography sx={{ position: "absolute", color: "#E381CD", fontWeight: 800, fontSize: "1rem", top: "10px", left: "10px", width: "180px" }}>Sur le même thème
                        </Typography>
                    </Paper>

                    <MiniArticleCard image='/article.jpeg' title="Autre article"></MiniArticleCard>
                    <MiniArticleCard image='/article.jpeg' title="Autre article"></MiniArticleCard>
                </Paper>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "rgb(255, 255, 255, 0.50)", width: "50vw" }}>
                <Paper elevation={0} sx={{ position: "relative", backgroundColor: "transparent", width: "100%" }}>
                    <Paper

                        sx={{ backgroundColor: "#FFC726", width: "180px", height: "50px", borderRadius: 0, boxShadow: "none", position: "absolute", top: "-30px", left: "30px" }}>
                        <Typography sx={{ position: "absolute", color: "#E381CD", fontWeight: 800, fontSize: "1rem", top: "10px", left: "30px", width: "180px" }}>Commentaires
                        </Typography>

                    </Paper>
                </Paper>
                {commentsToDisplay}
            </Box>
            <Footer></Footer>
            <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
        </Box>
    )
}

function mapStateToProps(state){
    return {countToDisplay: state.compteur}
  }
  function mapDispatchToProps(dispatch){
    
  return {
    Like: function () {

      dispatch({ type: "add" })
    },
    Dislike: function () {
      dispatch({ type: "remove"})
    }
  }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Article);