/*CUSTOM COMPONENTS*/
import NavBar from "../components/navbar"
import MainDivider from "../components/divider";
import CategoryBadge from "../components/Badge";
import ModeSwitch from "../components/switch";
import StyledButton from "../components/button";
import ArticleCard from "../components/card";
import Footer from "../components/footer";
import PopUp from "../components/popup";

/*COMPONENTS MUI*/
import { Box, Paper, Typography, Avatar, Grid } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";
import { List, ListItem, ListItemButton, ListItemText, TextField, InputAdornment } from "@mui/material";

/*ROUTER DOM*/
import { useNavigate } from "react-router-dom"

/*REACT*/
import { useEffect, useState } from "react";

/*REDUX*/
import { connect } from 'react-redux';

/* REACT REVEAL*/
import Fade from 'react-reveal/Fade';

function Main(props) {

  const [list, setList] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [lastArticle, setLastArticle] = useState([]);
  const [mostPopular, setMostPopular] = useState([])
  const [category, setCategory] = useState("")
  const [errorToShow, setErrorToShow] = useState(null);
  // const [toCheck, setToCheck] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {

    const findArticles = async () => {
      const dataArticles = await fetch(`/articles`)
      const body = await dataArticles.json()

      setList(body.allArticles)
      props.Article(body.allArticles)
      setLastArticle(body.lastArticle)
      setMostPopular(body.fiveMostPopular)
      // setCategory(body.categoryName)
    }
    findArticles()
  }, [])


  const search = async () => {
    const dataSearch = await fetch('/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `search=${recherche}`
    })
    const retour = await dataSearch.json()
    var toCheck = retour.check
    console.log("quoi", retour.check)
    if (toCheck == true) {

      props.Result(retour.filtered);

      navigate("/Result")
    } else {
      setErrorToShow(retour.error);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search()
  }

  var mostPopularList = mostPopular.map((popular, i) => {
    return (
      <ListItem key={i} disablePadding>
        <ListItemButton>
          <ListItemText primary={popular.title} />
        </ListItemButton>
      </ListItem>

    )
  })

  var allArticles = list.map((article, i) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var date = new Date(article.date_published).toLocaleDateString("fr-FR", options);
    return (
      <ArticleCard key={i} title={article.title} date={date} img={article.image} read={article.readingTime} cardShadow={i % 2 ? "pink" : "yellow"} id={article._id}></ArticleCard>
    )
  })

  //Pagination



  return (
<Grid>
    
      <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
      <Fade>
        
        <NavBar></NavBar>
       
        <MainDivider orientation="horizontal"></MainDivider>
        <Box sx={{ height: "100vh", width:"100vw", opacity: "0.8", backgroundImage: `url(${lastArticle.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", display:"flex", justifyContent:"space-between", padding:"50px"}}>

          <CategoryBadge size="sm" title={category}></CategoryBadge>

          <Box sx={{ background: "white", height: "65vh", width: "55vw", boxShadow: "-20px -10px #E381CD", alignSelf:"end", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
            <Avatar sx={{height:"100px", width:"100px", marginLeft:"10px"}} alt="Remy Sharp" src={lastArticle.avatar} />
            <Typography variant="body2" sx={{ margin: "40px" }}>Hey</Typography>
            <StyledButton sx={{alignSelf:"flex-end", margin:"10px"}} color="yellow" title="I am a button" size="sm"></StyledButton></Box>

        </Box>
      </Fade>

      <Fade top>
        <Box sx={{ display: "flex", justifyContent: "space-around", margin: "50px", height: "100vh" }}>

          {allArticles}
          <Box>
            <Box component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                margin: "auto"
              }}
              noValidate
              autoComplete="off">
              <form>
                <TextField id="standard-basic" label="Recherche un article" variant="standard"
                  onChange={(e) => setRecherche(e.target.value)}
                  value={recherche}
                  InputLabel={{ disableAnimation: "true" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton
                          type="submit"
                          edge="end"
                          onClick={(e) => handleSubmit(e)}><SendIcon color="primary" /></IconButton>
                      </InputAdornment>
                    )
                  }}
                />

              </form>
            </Box>
            <Box sx={{ width: "300px", opacity: "0.7", position: "relative" }}>
              <List sx={{ borderRadius: "15px", bgcolor: 'background.paper', width: "100%", boxShadow: "3px -2px 4px" }}>

                <ListItem>
                  <Paper

                    sx={{ backgroundColor: "#FFC726", width: "200px", height: "50px", borderRadius: 0, boxShadow: "none", position: "absolute", top: "-30px", left: "50px" }}>
                    <Typography sx={{ position: "absolute", color: "#E381CD", fontWeight: 800, fontSize: "1rem", top: "10px", left: "10px", width: "200px" }}>Les plus populaires
                    </Typography>
                  </Paper>
                </ListItem>
                <ListItem></ListItem>
                {mostPopularList}
              </List>

            </Box>
          </Box>
        </Box>
      </Fade>
      <PopUp></PopUp>
      <Fade>
        <Footer></Footer>
      </Fade>
 
    </Grid>
  );
}

function mapDispatchToProps(dispatch) {

  return {
    Result: function (results) {

      dispatch({ type: "search", results })
    },
    Article: function (articles) {
      dispatch({ type: "storeArticles", articles })
    }
  }
}

export default connect(null, mapDispatchToProps)(Main);
