import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate= useNavigate()

     function signup(){
        
       
        axios.post(`http://localhost:5000/api/auth/createuser`,{
            name: name,
            email: email,
            password: password
        }).then((res)=>{ navigate("/Login")
            // console.log(res)
        })
    }


  return (
    <div >
       <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
      >
         <Typography variant="h3" padding={3} textAlign="center">Signup</Typography>
         <TextField id="outlined-basic" label="name" variant="outlined" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} /> <br />
         
         <TextField id="outlined-basic" label="email" variant="outlined" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
         
         <TextField id="outlined-basic" label="password" variant="outlined" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>  <br />
        
         <Button variant="contained" onClick={()=>{signup()}} >Register</Button>
         </Box>
         </div>
  )
}
