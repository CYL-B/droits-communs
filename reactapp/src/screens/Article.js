import { Grid, Box, Paper, IconButton, Badge } from "@mui/material";
import NavBar from "../components/navbar"
import Footer from "../components/footer";
import ModeSwitch from "../components/switch";
import MainDivider from "../components/divider";
import { ArtCard, MiniArticleCard } from "../components/articleCard";


import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';

import HeadsetIcon from '@mui/icons-material/Headset';
import TextField from '@mui/material/TextField';
import StyledButton from "../components/button";

//Rating
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';


import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom"

//Social medias


function Article(props) {

 
    const { id } = useParams();
    const [comment, setComment] = useState("");
    const [name, setName] = useState("")
    const [mainArticle, setMainArticle] = useState({})
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0)
    const [averageRating, setAverageRating] = useState(0)
    const [isRated, setIsRated] = useState(false)

//récupère la valeur de l'input commentaire
    const handleChange = (event) => {
        setComment(event.target.value);
        setName(event.target.value)
        // changeArticle();
    };

//modifie les informations de l'article en BDD (comment + ratings)
    const changeArticle = async () => {
        const dataArticle = await fetch('/add-comment', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `comment=${comment}&count=${count}&id=${id}&name=${name}`
        })
        const retour = await dataArticle.json()
        
    
      }
//permet de trouver l'article à afficher
    useEffect(() => {

        const findArticle = async () => {
            const dataArticle = await fetch(`/target-article/${id}`)
            const body = await dataArticle.json()

            setMainArticle(body.articleFound)

        }
        findArticle()
    }, [])


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });


//fonction qui s'active au clic sur les étoiles (rating)
    var chooseRating = (event, newValue) => {
        setValue(newValue);
        setCount(count + 1)
        setIsRated(true)
    }

    
    /* appel de la fonction FB permettant de partager un post*/
    const FB = window.FB

    const facebookFunction = () => {
        FB.ui({
            display: 'popup',
            method: 'share',
            href: 'https://developers.facebook.com/docs/',
        
          }, function(response){});
    }

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

                                Note ({mainArticle.ratingCount + count})
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                <Rating name="customized-5" defaultValue={mainArticle.rating} max={5} readOnly />
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
          onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            <StyledButton color="yellow" size="md" title="Poster"></StyledButton>
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
                            <Typography>Cet article a t-il été utile ? </Typography>

                            <Rating name="customized-5" defaultValue={0} max={5}
                                onChange={(event, newValue) => {
                                    chooseRating(event, newValue)

                                }} />
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
                <Paper sx={{ margin: "20px", backgroundColor: "white", width: "75%", height: "auto", marginY: "50px" }}>
                    <Typography variant="body1" sx={{ padding: "10px", fontWeight: 800 }}>Hey</Typography>
                    <Typography variant="body1" sx={{ padding: "10px" }}>Hey</Typography>
                </Paper>
            </Box>
            <Footer></Footer>
            <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
        </Box>
    )
}

export default Article;