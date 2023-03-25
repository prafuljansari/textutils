import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "danger");
    }
    const handleCopyClick= ()=>{
        if(!text){
            props.showAlert("No text to copy", "danger");
        }else {
            navigator.clipboard.writeText(text).then(()=>{
                props.showAlert("Text copied", "success");
            }).catch(()=>{
                props.showAlert("Something went wrong", "danger");
            });
            
        }
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-outline-info m-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-outline-danger m-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your Text Summry</h2>
        <p><b>{text.split(" ").filter(i => i).length }</b> word and <b>{text.length}</b> Character</p>
        <p><b>{0.008 * text.split(" ").filter(i => i).length}</b> Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter Something in the text box above to preview"}</p>
    </div>
    </>
  )
}
