import { Grid, Box, Paper, Typography, Avatar } from "@mui/material";
import NavBar from "../components/navbar"
import MainDivider from "../components/divider";
import Footer from "../components/footer";
import Results from "../components/liste";
import StyledButton from "../components/button";
import TextField from '@mui/material/TextField';
import ModeSwitch from "../components/switch";
import CustomBadge from "../components/customBadge";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function MapPlaceholder() {
    return (
      <p>
        Map of London.{' '}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    )
  }

function Map(props) {

    return (
        <Grid>
            <ModeSwitch setTheme={props.setTheme}></ModeSwitch>
            <NavBar></NavBar>
            <MainDivider orientation="horizontal"></MainDivider>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <MapContainer  style={{ height: "500px", width: "500px" }} center={[51.505, -0.09]} zoom={5}
                placeholder={<MapPlaceholder />}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                {/* <Paper sx={{ maxWidth: 760, width: "760px", height: "430px" }} elevation={3} /> */}
                <Box component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        margin: "auto"
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="standard-basic" label="Recherche" variant="filled" />
                </Box>
                <StyledButton size="md" title="Valider"></StyledButton>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Results>


                    </Results>

                </Box>

            </Box>
            <Footer></Footer>
        </Grid>
    )
}

export default Map;