import { Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/bungee-shade"
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

const EnterButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "3.4rem",
  padding: '6px 12px',

  lineHeight: 1.5,

  fontFamily:
    "Bungee Shade",
  
    animationName: fadeIn,
    animationDuration: '2s',
    animationFillMode: 'backwards',
    animationIterationCount : "infinite",
   
  
  transition: "none"
})

// Hover 
// fontFamily: [
//   "Bungee Shade"
// ].join(','),
// '&:hover': {
//   backgroundColor: 'white',
//   borderColor: 'black',
//   borderRadius : 20,
//   boxShadow: 'none',
//   opacity: 1.0
// },

/*FOCUS
,
  '&:focus': {
    boxShadow: '0 0 0 0.2rem none',
  },
  
  ACTIVE
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'white',
    borderColor: 'black',
  }*/

function LandingScreen() {
  return (

    <Grid container direction="column" alignItems="center" justifyContent="center" height="100vh" >

      <Typography variant="h1" sx={{ color: "white" }}>Droit(s) commun(s)</Typography>
      <Link to="/main" style={{ textDecoration: 'none' }}><EnterButton onClick={() => {
        console.log("ok");
      }}>Enter ?</EnterButton></Link>




    </Grid>

  );
}

export default LandingScreen;
