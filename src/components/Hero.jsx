import { Box, Toolbar, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1593282227454-060e5aa052ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Toolbar /> 
      
      <Container>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" sx={{  opacity: 0.8 }}>
          Discover amazing content and experience the best services we offer.
        </Typography>
        <Button variant="contained"  sx={{ mt: 3, px: 4, py: 1.5,backgroundColor: "#FFF", color: "#1976D2", transition:"1s ", ":hover":{scale:"1",

        }  }}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
