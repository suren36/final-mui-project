import React from 'react'
import Appbar from '@mui/material/AppBar';
import { Stack,Box, Toolbar, Typography, Button, IconButton,Tabs, Tab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Link } from 'react-router';





export const Header = () => {

    const links =["Products","Solutions","Pricing","Enterprise"];
  return (
    <Appbar  position="sticky" color="primary" >
<Toolbar>
<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
    
  
  <Box sx={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}>
  <AllInclusiveIcon />

<Tabs component={Link} to="/" sx={{ ml: 2, textDecoration:"none" }}>

{links.map((link, index)=>(

 <Tab  sx={{ color: '#fff' ,fontWeight:"bold", textDecoration:"none",":hover":{textDecoration:"underline",textUnderlineOffset:"8px"}}} label={link} key={index}/>


))}

</Tabs>




  </Box>
  <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
  <Button 
    variant="outlined" 
    color="inherit" 
    sx={{ whiteSpace: "nowrap", height: 40, px: 3 }}
  >
    Talk To Us
  </Button>
  <Button 
    variant="contained" 
    sx={{ whiteSpace: "nowrap", height: 40, px: 3 , backgroundColor:"#fff", color:"#1976D2"}}
  >
    Try For Free
  </Button>
</Stack>


</Toolbar>

    </Appbar>
  )
}
