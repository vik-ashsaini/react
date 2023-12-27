import React ,{useState} from 'react'

export default function Form(props){

    const [text,setText] = useState('');
    // setText('dfgd');

    const handleOnClick = (event) =>{
        setText(event.target.value);
    }

    const clickClearBtn = () =>{
        setText('');
    }
    
    const clickUpperBtn = (event) =>{
        setText(text.toUpperCase()); 
        props.showAlert("Converted to UpperCase!","success");      
    }

    const clickLowerBtn = (event) =>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!","success");
    }

    const clickNormalizeBtn = () =>{
        setText(text.normalize());
    }

    const clickCopyBtn = () =>{
        var t = document.getElementById('textArea');
        t.select()
        navigator.clipboard.writeText(t.value);
        props.showAlert("Text Copied to CilpBoard!","success");
    }

    const clickRemoveSpaceBtn = () =>{
        var t = text.split(/[ ]+/);
        setText(t.join(' '));
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="textArea" className="form-label">Count Words , Characters and Preview</label>
                    <textarea className="form-control" id="textArea" placeholder='Enter Text here' onChange={handleOnClick} 
                    value={text} rows="5" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={clickUpperBtn}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={clickLowerBtn}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={clickClearBtn}>Clear Text</button>
                <button className='btn btn-primary mx-2' onClick={clickCopyBtn}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={clickRemoveSpaceBtn}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-2' onClick={clickNormalizeBtn}>Convert to Normalize Text</button>
                
            </div>
            <div className='container my-2' style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes reqiured to read this text</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter text to Preview Here'}</p>
            </div>
        </>        
    ) 
} 