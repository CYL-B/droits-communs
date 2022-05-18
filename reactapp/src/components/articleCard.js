import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function ArtCard(props) {

    return (
       
            <Card sx={{ maxWidth: 760, width: "auto"}}>
                <CardMedia
                    component="img"
                    alt={props.alt}
                    height="430px"
                    image={props.img}
                />
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column", alignItems: "center"
                }}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                       {props.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                       {props.subtitle}
                    </Typography>
                </CardContent>

            </Card>
        
    )

}

function MiniArticleCard(props) {
   
    let borderRadius
    if (props.corner == "round"){
        borderRadius = "50px"

    } else{
        borderRadius="0px"
    }

    return (
        
            <Card sx={{ maxWidth: 300, width: "300px", boxShadow:"-10px 10px rgb(0, 0, 0, 0.25)", marginX:"20px", borderBottomLeftRadius : borderRadius, borderBottomRightRadius : borderRadius}}>
                <CardMedia
                    component="img"
                    alt={props.alt}
                    height="150px"
                    image={props.image}
                />
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column", alignItems: "center",
                }}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {props.title}
                    </Typography>
                </CardContent>

            </Card>
      

    )
};

export {MiniArticleCard, ArtCard} 