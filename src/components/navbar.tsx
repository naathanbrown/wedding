import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Samantha and Nathan's Wedding
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="The Day"
              onClick={() => console.log("the day")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              The Day
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
