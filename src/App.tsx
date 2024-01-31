import './App.css';
import React from 'react'
import { LandingScreen } from './screens/landingScreen.tsx';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {Route, Routes } from 'react-router-dom'
import { Login } from './screens/login.tsx';
import { MainScreen } from './screens/main.tsx';
import BannerScreen from './screens/bannerScreen.tsx';



const theme = createTheme({
  palette: {
    primary: {
      main: red[900]
    },
    secondary: {
      main: '#ffff'
    },
    info: {
      main: 'rgba(109, 109, 110, 0.7)'
    },
    text: {
      primary: '#ffff'
    },
    
  
  },
  components: {
    MuiSelect: {
      defaultProps:{
        style:{
          '&:before': {
            borderColor: 'your-custom-border-color', // Change border color before selection
          },
          '&:after': {
            borderColor: 'your-custom-border-color', // Change border color after selection
          },
          '&:hover:not(.Mui-disabled):before': {
            borderColor: 'your-hover-border-color', // Change border color on hover
          },
        }
      }
    },
    MuiLink: {
      defaultProps:{
        style:{textDecoration: 'none', color:'white'}
      }
    }
  },
})
  
const App = ()=> {
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path='/' element={<LandingScreen />}/>
          <Route path='/banner/:movieid' element={<BannerScreen />}/>
        <Route path='login' element={<Login />}/>
        <Route
          path="/movies"
           element={<MainScreen />}
        />
      </Routes>
    </ThemeProvider>
      
  );
}

export default App;
