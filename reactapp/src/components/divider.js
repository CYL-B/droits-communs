
import {Box, Grid, Divider} from "@mui/material"


export default function MainDivider(props) {
  
  let orientation
  let width
  let height
  if (props.orientation == "vertical"){
    orientation = "vertical"
    width = "0";
    height="75vh";
    
  } else if(props.orientation =="horizontal") {
    orientation ="horizontal";
    width = "75vw"
    height = "auto"
  }


  return (
    
      <Box  sx={{display:"flex", justifyContent:"center"}}>
   <Divider classes={{orientation:{orientation}}} sx={{border: "10px solid white", width:{width}, opacity:"0.60", 
marginY:"40px", height:{height}}}/>
   </Box>
  );
}