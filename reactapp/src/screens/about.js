import { Grid, Box, Paper, Typography, Avatar } from "@mui/material";
import NavBar from "../components/navbar"
import MainDivider from "../components/divider";
import Footer from "../components/footer";
import ModeSwitch from "../components/switch";
import { ArtCard, MiniArticleCard } from "../components/articleCard";

function About(props) {
    return (
        <Grid>
            <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
            <NavBar>
            </NavBar>
            <MainDivider orientation="horizontal"></MainDivider>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <ArtCard img="https://i.goopics.net/yg2lde.jpg" title="A propos" subtitle="Pourquoi Droit(s) Commun(s) ?"></ArtCard>
            <Box><Box
                        sx={{
                            bgcolor: 'background.default',
                            height: "180px",
                            width: "760px",
                            height: "auto",
                            opacity: "0.7",
                            margin:"10px"
                        }}>
                        <Paper elevation={12}><Typography variant="body1" sx={{ padding: "50px", textAlign: "justify;" }}>grigri</Typography></Paper>


                    </Box>
                    <MiniArticleCard corner="round" image="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_1280.jpg"></MiniArticleCard>
                    </Box>
            </Box>
            <MainDivider orientation="horizontal"></MainDivider>
            <Footer></Footer>
        </Grid>
    )
}

export default About