import { Grid, Box, Paper, Typography, Avatar, IconButton } from "@mui/material";
import NavBar from "../components/navbar"
import MainDivider from "../components/divider";
import Footer from "../components/footer";
import ArticleCard from "../components/card";
import ModeSwitch from "../components/switch";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from "react-router-dom";

import {useEffect, useState} from "react"

function Category(props) {
    const { name, id, mainid } = useParams();
const[match, setMatch] = useState([]);

    useEffect(() => {

        const matchArticles = async () => {
          const dataMatchArticles = await fetch(`/category-articles/${id}/${mainid}`)
          const body = await dataMatchArticles.json()
    
          setMatch(body.articlesToSend)
    
        }
        matchArticles()
      }, [])



var articlesToDisplay = match.map((article, i)=>{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
   var date = new Date(article.date_published).toLocaleDateString("fr-FR", options);

    return(<ArticleCard key={i} img={article.image} title={article.title} cardShadow={i % 2 ? "pink" : "yellow"} read={article.readingTime} date={date} id={article._id}></ArticleCard>)
})
    return (
        <Grid>
            <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
            <NavBar>
            </NavBar>
            <MainDivider orientation="horizontal"></MainDivider>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography color="primary" variant="h2">{name}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around", margin: "50px" }}>
               {articlesToDisplay}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton sx={{ margin: "50px", color: "white" }}><ArrowBackIcon fontSize="large" ></ArrowBackIcon></IconButton>
                <IconButton sx={{ margin: "50px", color: "white" }}><ArrowForwardIcon fontSize="large" ></ArrowForwardIcon></IconButton>
            </Box>
            <Footer></Footer>
        </Grid>
    )
}

export default Category;