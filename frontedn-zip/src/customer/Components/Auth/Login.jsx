// import * as React from "react";
// import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, login } from "../../../Redux/Auth/Action";
// import { useEffect } from "react";
// import { useState } from "react";

// export default function LoginUserForm({ handleNext }) {
//   const navigate = useNavigate();
//   const dispatch=useDispatch();
//   const jwt=localStorage.getItem("jwt");
//   const [openSnackBar,setOpenSnackBar]=useState(false);
//   const { auth } = useSelector((store) => store);
//   const handleCloseSnakbar=()=>setOpenSnackBar(false);
//   useEffect(()=>{
//     if(jwt){
//       dispatch(getUser(jwt))
//     }
  
//   },[jwt])
  
  
//     useEffect(() => {
//       if (auth.user || auth.error) setOpenSnackBar(true)
//     }, [auth.user]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
    
//     const userData={
//       email: data.get("email"),
//       password: data.get("password"),
     
//     }
//     console.log("login user",userData);
  
//     dispatch(login(userData));

//   };

//   return (
//     <React.Fragment className=" shadow-lg ">
//       <form className="w-full" onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="email"
//               name="email"
//               label="Email"
//               fullWidth
//               autoComplete="given-name"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="password"
//               name="password"
//               label="Password"
//               fullWidth
//               autoComplete="given-name"
//               type="password"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Button
//               className="bg-[#9155FD] w-full"
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{padding:".8rem 0"}}
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <div className="flex justify-center flex-col items-center">
//          <div className="py-3 flex items-center">
//         <p className="m-0 p-0">don't have account ?</p>
//         <Button onClick={()=> navigate("/register")} className="ml-5" size="small">
//           Register
//         </Button>
//         </div>
//       </div>
//       <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
//         <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
//           {auth.error?auth.error:auth.user?"Register Success":""}
//         </Alert>
//       </Snackbar>
//     </React.Fragment>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { login } from '../../../Redux/Auth/Action';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const res = await axios.post('http://localhost:5454/auth/login', formData);
      // const { token, user } = res.data;

      // // Store token and user data in localStorage
      // localStorage.setItem('userToken', token);
      // localStorage.setItem('userName', user.name);
      // localStorage.setItem('userRole', user.role);

      // // Redirect to the desired page (e.g., home or dashboard)
      // navigate('/home');  // Change '/home' to the page you want to navigate to after login

      dispatch(login(formData)); 
    } catch (err) {
      setErrorMessage('Login failed: ' + (err.response?.data?.message || 'Error'));
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');  // Redirect to the register page
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
            style={styles.input}
          />
        </label>

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {/* Link to redirect to register page */}
        <div style={styles.registerLink}>
          <p>
            Don't have an account? 
            <span style={styles.link} onClick={handleRegisterRedirect}> Register</span>
          </p>
        </div>
      </form>

      {/* Display error message if login fails */}
      {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f6fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    marginBottom: '10px',
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    color: '#444',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#6c5ce7',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  registerLink: {
    textAlign: 'center',
    marginTop: '10px',
  },
  link: {
    color: '#6c5ce7',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Login;
