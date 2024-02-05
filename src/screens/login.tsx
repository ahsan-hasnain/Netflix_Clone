// NetflixSignInComponent.tsx
import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import {Link  as Rlink}from 'react-router-dom';
import { useUser } from '../contexts/userContext.tsx';
import { styled } from '@mui/system';
import { Background } from '../components/background.tsx';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)({
  padding: '20px',
  maxWidth: '400px',
  margin: 'auto',
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

const StyledForgotPasswordLink = styled(Link)({
  marginTop: '8px',
});

export const Login = ({handleAuth}) => {
  const { signIn, loading } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password).then(()=>navigate('/movies'));
      handleAuth(true)
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle error
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Background>
        <StyledPaper elevation={3}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <StyledForm>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handleChange2}
          autoComplete="current-password"
        />
        <StyledSubmitButton type="submit" fullWidth variant="contained" color="primary" onClick={handleSignIn} disabled={loading}>
          {loading ? <p>loading</p>: <p>Sign In</p>}
        </StyledSubmitButton>
        <StyledForgotPasswordLink  variant="body2">
          Forgot password?
        </StyledForgotPasswordLink><br/>
        <Rlink to='/signup'>
           New to Netflix? Signup Instead
        </Rlink>
      </StyledForm>
    </StyledPaper>
    </Background>
  );
};

;
