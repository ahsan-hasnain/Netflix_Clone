import './App.css';
import React, { useState } from 'react'
import { LandingScreen } from './screens/landingScreen.tsx';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './screens/login.tsx';
import { MainScreen } from './screens/main.tsx';
import BannerScreen from './screens/bannerScreen.tsx';
import { useUser } from './contexts/userContext.tsx';
import path from 'path';
import { SignUp } from './screens/signUp.tsx';



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
    MuiLink: {
      defaultProps:{
        style:{textDecoration: 'none', color:'white'}
      }
    }
  },
})
const PrivateRoute = ({authenticated})=>{
  return (
    authenticated ?<Outlet />: <Navigate to={'/login'}/>
  )
}
const App = ()=> {
  const [authenticated, setAuthenticated] = useState(false)
  const handleAuth = (value) => {
    setAuthenticated((prevAuth) => value);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path='/' element={<LandingScreen />}/>
        <Route element={<PrivateRoute authenticated={authenticated}/>}>
            <Route element={<MainScreen  type={'movie'} handleLogOut={handleAuth}/>} path={'/movies'}/>
            <Route element={<MainScreen  type={'tv'} handleLogOut={handleAuth}/>} path={'/tvshows'}/>
        </Route>
        <Route path='/banner/:movieid' element={<BannerScreen />}/>
        <Route path='/login' element={<Login handleAuth={handleAuth}/>}/>
        <Route path='/signup' element={<SignUp handleAuth={handleAuth}/>}/>
        
      </Routes>
    </ThemeProvider>
      
  );
}

export default App;
