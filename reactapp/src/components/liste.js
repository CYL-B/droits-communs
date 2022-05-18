import Box from '@mui/material/Box';
import { Paper, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function Results() {

  return (
    <Box sx={{ width: "75%", opacity: "0.7", position: "relative" }}>
      <List sx={{ borderRadius: "15px", bgcolor: 'background.paper', width: "100%", boxShadow: "3px -2px 4px" }}>

        <ListItem>
          <Paper

            sx={{ backgroundColor: "#FFC726", width: "180px", height: "50px", borderRadius: 0, boxShadow: "none", position: "absolute", top: "-30px", left: "30px" }}>
            <Typography sx={{ position: "absolute", color: "#E381CD", fontWeight: 800, fontSize: "1rem", top: "10px", left: "50px" }}>Résultats
            </Typography>
          </Paper>
        </ListItem>
        <ListItem></ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  );
}