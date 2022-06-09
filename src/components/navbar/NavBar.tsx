import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { StylesAvatarNav } from "../../styles/components";
import { NavBarOptions } from "./";

export const NavBar = (): JSX.Element => {
  const navigate = useNavigate();

  const { lightTheme, toggleSidebar, toggleTheme } = useContext(UIContext);

  const handleSearch = () => {
    navigate("/movies/search");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "primary.light",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          style={{
            height: "100%",
            display: "flex",
          }}
        >
          <Avatar sx={{ ...StylesAvatarNav }}>
            <IconButton
              size="large"
              aria-haspopup="true"
              sx={{ color: "primary.main" }}
              onClick={toggleSidebar}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Avatar>
        </Box>
        <Box
          style={{
            display: "flex",
            backgroundColor: "primary.dark",
          }}
        >
          {lightTheme ? (
            <NavBarOptions
              Icon={<LightModeOutlinedIcon />}
              onFunction={toggleTheme}
            />
          ) : (
            <NavBarOptions
              Icon={<DarkModeOutlinedIcon />}
              onFunction={toggleTheme}
            />
          )}

          <NavBarOptions
            Icon={<SearchOutlinedIcon />}
            onFunction={handleSearch}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
