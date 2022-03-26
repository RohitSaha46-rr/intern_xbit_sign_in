import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useRef} from 'react'
import './sign.css';
import { Grid,Typography,Button } from '@mui/material';
import log from './images/log.jpeg';
import './media.css';
function App() {
  const eye_icon=useRef(null);
  const[icon,new_icon]=useState(faEyeSlash);
  const[check,updated_check]=useState(true);
  //let check=true;
  const[fullinfo,setinfo]=useState({
    email:"",
    pass:"",
  })
  let name,value;
    const changeinput=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setinfo({...fullinfo,[name]:value});
    }
  const fun=()=>{
    
    //e.preventDefault();
  }
  const change_eye=()=>{
   let xtype=eye_icon.current;
   if(xtype.type==="password"){
xtype.type="text";
new_icon(faEye);
updated_check(false);
   }
  }
   const change_eye1=()=>{
    let xtype=eye_icon.current;
    if(xtype.type==="text"){
 xtype.type="password";
 new_icon(faEyeSlash);
updated_check(true);
    }
  }
  return (
    <div className="App">
      <Grid container  style={{width:"100vw",height:"101vh"}} spacing={1}>
  <Grid item lg={6} xl={6} md={6} >
    
    <img src={log} style={{width:"100%",height:"100%"}} className='kid'></img>
    
  </Grid>
  <Grid item lg={6} xl={6} md={6}>
  <div className='right' style={{width:"100%",height:"100%"}}>
  <div className='inside'>
  <FontAwesomeIcon icon={faUser} style={{fontSize:"5rem",paddingBottom:"20px"}}></FontAwesomeIcon>
<h1 style={{fontFamily:"'Roboto', sans-serif"}}>Sign In</h1>

<form method='get'>
<h2 style={{fontFamily: "'Roboto Condensed', sans-serif",paddingTop:"20px",paddingLeft:"10px"}}>Email *</h2>
<input type="email" name="email" value={fullinfo.email} className='input' style={{marginTop:"5px"}} autoComplete="off" onChange={changeinput} required></input>
<h2 style={{fontFamily: "'Roboto Condensed', sans-serif",paddingTop:"20px",paddingLeft:"10px"}}>Password *</h2>
<input type="password" name="pass" ref={eye_icon} value={fullinfo.pass} className='input' style={{marginTop:"5px"}} autoComplete="off"  onChange={changeinput} required></input>
<FontAwesomeIcon icon={icon} id="eye" onClick={check? change_eye : change_eye1} ></FontAwesomeIcon>
<br></br>
<div className='check'>
<input type="checkbox" style={{width:"23px",height:"23px",marginTop:"3px"}}></input>
<Typography variant="h5" pl={1} className='down' style={{fontFamily: "'Roboto Condensed', sans-serif"}}>
  Remember Me
</Typography>
{/* <h3 style={{paddingLeft:"5px"}}>Remember Me</h3> */}
<Typography variant="h5" pb={2} pl={3} style={{color:"red"}} className='down'>
  Forgot Password?
</Typography>
</div>
{/* <button type="submit" onClick={fun}>Submit</button> */}
<Button type="submit" onClick={fun} variant="contained">Submit</Button>
</form>
<h3 style={{paddingTop:"20px"}}>Don't have an account?<span style={{color:"rgb(144, 80, 187)",cursor:"pointer"}}>SignUp</span></h3>
  </div>
  </div>
  </Grid>
  </Grid>
    </div>
  );
}

export default App;
