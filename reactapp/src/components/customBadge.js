import { ThemeContext } from "@emotion/react";
import {  Paper, Typography, Avatar, IconButton } from "@mui/material";

function StyledPaper(props){

    return(
        <Paper
        
        sx={{backgroundColor:"#FFC726", width:"180px", height:"50px", borderRadius:0, boxShadow:"none", position:"absolute"}}>
            <Typography sx={{position:"absolute", color:"#E381CD", fontWeight:800, fontSize:"1rem", top:"10px", left:"50px"}}>
            </Typography>
        </Paper>
    )
}



// export default function CustomBadge(props) {

//     return(
        
// <StyledPaper {...props}></StyledPaper>
//     )
// }