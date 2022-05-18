
import { Box, Button, IconButton, Menu, MenuItem, Grid } from "@mui/material"
import { MoreVert } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null)

  const [anchorEl2, setAnchorEl2] = useState(null)

  const [anchorEl3, setAnchorEl3] = useState(null)

  const [categories, setCategories] = useState({})

  const open = Boolean(anchorEl);

  const open1 = Boolean(anchorEl1)

  const open2 = Boolean(anchorEl2)

  const open3 = Boolean(anchorEl3)

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null)
  };

  const link = () => {

    window.location.href = "/Main";

  }

  useEffect(() => {

    const findCategories = async () => {
      const dataCategories = await fetch(`/categories`)
      const body = await dataCategories.json()

      setCategories(body.categories)


    }
    findCategories()
  }, [])

  var droits
  var culture
  var pros
  var plus

  var styleLink = {
    textDecoration: 'none'
  }

  for (var i = 0; i < categories.length; i++) {

    if (categories[i].categoryName == "droits") {
      droits = categories[i].subCategories.map((subcategory, j) => {
        return (<MenuItem onClick={handleClose}><Link key={j} to={`/Category/${subcategory.subCategory}/${subcategory._id}/${categories[i]._id}`} style={styleLink}>{subcategory.subCategory.toUpperCase()}</Link></MenuItem>)
      })
    } else if (categories[i].categoryName == "culture") {
      culture = categories[i].subCategories.map((subcategory, j) => {
        return (<Link key={j} to={`/Category/${subcategory.subCategory}`} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>{subcategory.subCategory.toUpperCase()}</MenuItem></Link>)
      })
    } else if (categories[i].categoryName == "pros") {
      pros = categories[i].subCategories.map((subcategory, j) => {
        return (<Link key={j} to={`/Category/${subcategory.subCategory}`} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>{subcategory.subCategory.toUpperCase()}</MenuItem></Link>)
      })
    } else if (categories[i].categoryName == "plus") {
      plus = categories[i].subCategories.map((subcategory, j) => {
        return (<Link key={j} to={`/Category/${subcategory.subCategory}`} style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}>{subcategory.subCategory.toUpperCase()}</MenuItem></Link>)
      })
    }
  }




  return (
    <Grid container item
    direction="row"
      justifyContent='space-around'
      alignItems='center'
      lg={12}
      spacing={10}
     
      
      
    >
<Grid item>
      <img src="/logo.svg" alt="logo-droits-communs" onClick={link}></img>
      </Grid>
      <Grid item>
      <Link to={"/About"} style={{ textDecoration: 'none' }}><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        A propos
      </Button></Link></Grid>
      <Grid item>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Droits
      </Button>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {droits}
      </Menu>
      </Grid>
      <Grid item>
      <Button
        id="basic-button"
        aria-controls={open3 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open3 ? 'true' : undefined}
        onClick={(e) => setAnchorEl3(e.currentTarget)}
      >
        Culture
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {culture}
      </Menu>
      </Grid>
      <Grid item>
      <Button
        id="basic-button"
        aria-controls={open2 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={(e) => setAnchorEl2(e.currentTarget)}
      >
        Métiers
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {pros}
      </Menu>
      </Grid>

      <Grid item>

      <Link to={"/Map"} style={{ textDecoration: 'none' }}><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}

      >
        Ils en savent plus
      </Button></Link>

      </Grid>
      <Grid item>
      <IconButton
        id="basic-button"
        aria-controls={open1 ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={(e) => setAnchorEl1(e.currentTarget)}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {plus}
        {/* <MenuItem onClick={handleClose}>Politique de confidentialité</MenuItem>
        <MenuItem onClick={handleClose}>Mentions légales</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem> */}
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </Grid>
    </Grid>
  );
}