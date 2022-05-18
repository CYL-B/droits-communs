import { Grid, Box, Paper, Typography, Avatar, IconButton } from "@mui/material";
import NavBar from "../components/navbar"
import MainDivider from "../components/divider";
import Footer from "../components/footer";
import ArticleCard from "../components/card";
import ModeSwitch from "../components/switch";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from "react-router-dom";



import { connect } from 'react-redux';

function Result(props) {

    var resultFromStore = props.resultsToDisplay;
    console.log(resultFromStore )

    var resultat =  props.resultsToDisplay.map((result, i)=>{
        
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        var date = new Date(result[0].date_published).toLocaleDateString("fr-FR", options);
    return(
        <ArticleCard key={i} img={result[i].image} title={result[i].title} cardShadow={i % 2 ? "pink" : "yellow"} read={result[i].readingTime} date={date} id={result[i]._id}></ArticleCard>)
    })

    // console.log("check2", resultat)
    return (
        <Grid>
            <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
            <NavBar>
            </NavBar>
            <MainDivider orientation="horizontal"></MainDivider>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography color="primary" variant="h2">Résultats</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around", margin: "50px" }}>
          {resultat}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton sx={{ margin: "50px", color: "white" }}><ArrowBackIcon fontSize="large" ></ArrowBackIcon></IconButton>
                <IconButton sx={{ margin: "50px", color: "white" }}><ArrowForwardIcon fontSize="large" ></ArrowForwardIcon></IconButton>
            </Box>
            <Footer></Footer>
        </Grid>
    )
}


function mapStateToProps(state){
    return {resultsToDisplay: state.searchList}
  }
  
  export default connect(
    mapStateToProps,
    null
  )(Result)