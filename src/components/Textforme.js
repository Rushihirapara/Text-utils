import React,{useState} from 'react'


export default function Textforme(props) {
    const handleupclick =()=>{
//console.log("uppercase was clicked :" + text);
      let NewText= text.toUpperCase();
      settext(NewText)
      props.showAlert('converted to uppercase!','success');
    }
    const handlelowclick =()=>{
//console.log("lowpercase was clicked :" + text);
      let NewText= text.toLowerCase();
      settext(NewText)
      props.showAlert('converted to lowercase!','success');
    }
    const handleclearclick =()=>{
//console.log("erase to text");
      let NewText= '';
      settext(NewText)
      props.showAlert('Your texbox has cleared','success');
    }

  
    const handleonchange =(event)=>{
//console.log("on change");
      settext(event.target.value);
    }

    const [text, settext] = useState(' ');
    
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleupclick}> convert to uppercase</button> 
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handlelowclick}> convert to lowercase</button> 
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleclearclick}> clear text</button> 
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length}Words and {text.length} characters</p>
      <p> {0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to reading</p>
      <p> {0.00666666666 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to speaking</p>
      
      <h2>preview</h2>
      <p>{text.length>0?text:"Nothing to previw!"}</p>
    </div>
    </>
  )
}
