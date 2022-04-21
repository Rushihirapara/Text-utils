
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textforme from "./components/Textforme";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
 const[mode,setmode]=useState('light'); 
 const[alert,setalert]=useState(' ');
 const showAlert=(message,type)=>{
   setalert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setalert(' ');
        }, 2000);
 }
 const toggalemode=()=>{
  if(mode==='light'){
   setmode('dark');
   document.body.style.backgroundColor='#042743';
   document.body.style.color='white';
   showAlert('Darkmode has been enable','success');
   document.titel="Textutils-Darkmode";
 }
 else{
   setmode('light');
   document.body.style.backgroundColor='white';
   document.body.style.color='black';
   showAlert('Lightmode has been enable','success');
   document.titel="Textutils-lightmode";
   
 }
}
  return (
  <>
 
 <Router>    


      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggalemode={toggalemode}/>
      <Alert alert={alert}/>
    <div className="container my-3" >
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
          <Textforme heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>      
            </Route> 
        </Switch>
          
    </div>
    </Router>    
  </>
  );
}
          
          
          
         
          

        
         
        



   

export default App;
