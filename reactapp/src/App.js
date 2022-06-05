import React, { useState } from "react";
import './App.css';
import { CssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Store

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import articleList from './reducers/articles'
import searchList from './reducers/research'
import compteur from './reducers/like'


//Navigation
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingScreen from './screens/LandingScreen';
import Main from './screens/Main';
import Map from './screens/Map';
import Article from './screens/Article';
import About from './screens/about';
import Category from './screens/Category'
import Result from './screens/results';

import "@fontsource/bungee-shade"
import "@fontsource/ibm-plex-mono";

import {useInitFbSDK} from './social media/facebook'


const store = createStore(combineReducers({ articleList, compteur, searchList }))



const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "radial-gradient(110% 233.15% at 96.23% 0%, rgba(255, 199, 38, 0.75) 0%, rgba(227, 129, 205, 0.75) 99.98%, rgba(227, 129, 205, 0) 99.99%);",
          backgroundSize: "cover",
          height: "100%",
          backgroundRepeat: "no-repeat"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontWeight:700,
          
          "&:hover":{
            backgroundColor : '#FFC726'

          
          }
        },
      },
    },
  },
  
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#d3d3d3',
    },
    error: {
      main: '#7b61ff',
    },
    warning: {
      main: '#FF0000',
    },


  },
  typography: {
    fontFamily: 'IBM Plex Mono',
    h1: {
      fontFamily: 'Bungee Shade',
      fontSize: '6rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h2: {
      fontSize: '3.4rem',
      fontFamily: 'Bungee Shade',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: 1.9,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '0.8rem',
    },
    body2: {
      fontSize: '1rem',
    },
    button: {
      fontSize: '1.5rem',
      fontWeight: 800,
    },
  },
breakpoints:{
  values : {

    xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
  }
}
}
)

const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
      disabled: '#d3d3d3',
    },
    error: {
      main: '#7b61ff',
    },
    warning: {
      main: '#fdf6f0',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "black",
        }
      }
    }
  }
})

function App(props) {
  const [darkMode, setDarkMode] = useState(false);
  const isFbSDKInitialized = useInitFbSDK();

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<LandingScreen />} />

            <Route path="Main" element={<Main setTheme={setDarkMode} />} />

            <Route path="Map" element={<Map setTheme={setDarkMode} />} />

            <Route path="Article/:id"  element={<Article setTheme={setDarkMode} />} />

            <Route path="About" element={<About setTheme={setDarkMode} />}></Route>

            <Route path="Category/:name/:id/:mainid" element={<Category setTheme={setDarkMode} />}></Route>
            <Route path="Result" element={<Result setTheme={setDarkMode}></Result>}></Route>

          </Routes>


          <CssBaseline />
          

        </BrowserRouter>
      </ThemeProvider>
    </Provider>

  );
}

export default App;

