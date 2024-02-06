// NetflixSignUpComponent.tsx
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { MyInput } from '../components/myInput.tsx';
import { useUser } from '../contexts/userContext.tsx';
import { Background } from '../components/background.tsx';
import { useNavigate } from 'react-router-dom';
import {  styled } from '@mui/system';


const StyledPaper = styled(Paper)({
  padding: '20px',
  maxWidth: '400px',
  margin: 'auto',
  color:'black',
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
});

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '16px',
});

const StyledSubmitButton = styled(Button)({
  marginTop: '16px',
});

const StyledBackToSignInLink = styled(Link)({
  marginTop: '8px',
});

export const SignUp = ({ handleAuth }) => {
  const { signUp, loading } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password).then(() => navigate('/movies'));
      handleAuth(true);
    } catch (error) {
      alert(`Error signing up:, ${error.message}`);
      // Handle error
    }
  };


  return (
    <Background>
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom color={'black'}>
          Sign Up
        </Typography>
        <StyledForm>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Addres"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            inputProps={{
                style:{color:'black'}
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputProps={{
                style: {color:'black'}
            }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            disabled={loading}
          >
            {loading ? <p>loading</p> : <p>Sign Up</p>}
          </StyledSubmitButton>
          <StyledBackToSignInLink variant="body2">
            Already have an account? Sign In
          </StyledBackToSignInLink>
        </StyledForm>
      </StyledPaper>
    </Background>
  );
};
