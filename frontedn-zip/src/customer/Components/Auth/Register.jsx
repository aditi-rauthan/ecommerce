
// import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, register } from "../../../Redux/Auth/Action";
// import { Fragment, useEffect, useState } from "react";

// export default function RegisterUserForm({ handleNext }) {
//   const navigate = useNavigate();
//   const dispatch=useDispatch();
//   const [openSnackBar,setOpenSnackBar]=useState(false);
//   const { auth } = useSelector((store) => store);
//   const handleClose=()=>setOpenSnackBar(false);

//   const jwt=localStorage.getItem("jwt");

// useEffect(()=>{
//   if(jwt){
//     dispatch(getUser(jwt))
//   }

// },[jwt])


//   useEffect(() => {
//     if (auth.user || auth.error) setOpenSnackBar(true)
//   }, [auth.user]);
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     const userData={
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       email: data.get("email"),
//       password: data.get("password"),
      
//     }
//     console.log("user data",userData);
//     dispatch(register(userData))
  
//   };

//   return (
//     <div className="">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="firstName"
//               name="firstName"
//               label="First Name"
//               fullWidth
//               autoComplete="given-name"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="lastName"
//               name="lastName"
//               label="Last Name"
//               fullWidth
//               autoComplete="given-name"
//             />
//           </Grid>
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
//               Register
//             </Button>
//           </Grid>
//         </Grid>
//       </form>

// <div className="flex justify-center flex-col items-center">
//      <div className="py-3 flex items-center ">
//         <p className="m-0 p-0">if you have already account ?</p>
//         <Button onClick={()=> navigate("/login")} className="ml-5" size="small">
//           Login
//         </Button>
//       </div>
// </div>

// <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//           {auth.error?auth.error:auth.user?"Register Success":""}
//         </Alert>
//       </Snackbar>
     
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // default role to 'user'
    acceptedTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // state for tracking registration success
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false); // state to handle error modal visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, acceptedTerms: e.target.checked });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Step 1: Register the user
      const res = await axios.post('http://localhost:5454/auth/register', formData);
      alert(res.data.message); // Alert on success
  
      const { token, user } = res.data;
      localStorage.setItem("vendorId", user._id);
      localStorage.setItem("userToken", token);
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userRole", user.role);
  
      // Step 2: Set success state to true
      setSuccess(true);
  
      // Step 3: Redirect to another page (e.g., Login Page)
      navigate('/login');  // You can change '/login' to any other route
  
      // Step 4: Show a success message after registration
      setTimeout(() => {
        setSuccess(false); // Close the modal after 3 seconds
      }, 3000);
  
    } catch (err) {
      console.error('Error during registration:', err);
      setErrorMessage('Registration failed: ' + (err.response?.data?.message || 'Error'));
      setIsError(true); // Show error modal if registration fails
    } finally {
      setLoading(false);
    }
  };

  // Close the error modal manually
  const closeErrorModal = () => {
    setIsError(false);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>

        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

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

        <label style={styles.label}>
          Role
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
        </label>

        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleCheckboxChange}
            required
          />
          I accept the terms and conditions
        </label>

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {/* Success Message Modal */}
      {success && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Registration Successful!</h3>
            <button onClick={() => setSuccess(false)} style={styles.modalButton}>Close</button>
          </div>
        </div>
      )}

      {/* Error Message Modal */}
      {isError && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Error</h3>
            <p>{errorMessage}</p>
            <button onClick={closeErrorModal} style={styles.modalButton}>Close</button>
          </div>
        </div>
      )}
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
  checkboxLabel: {
    fontSize: '14px',
    color: '#444',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
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
  modal: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
  },
  modalButton: {
    backgroundColor: '#6c5ce7',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Register;
