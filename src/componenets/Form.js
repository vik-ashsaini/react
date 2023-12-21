import React ,{useState} from 'react'

export default function Form(props){

    const [text,setText] = useState('Enter Text here');
    // setText('dfgd');

    const handleOnClick = (event) =>{
        setText(event.target.value);
    }

    const clickUpperBtn = (event) =>{
        setText(text.toUpperCase());       
    }

    const clickLowerBtn = (event) =>{
        setText(text.toLowerCase());
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label for="textArea" className="form-label">Enter Text here</label>
                    <textarea class="form-control" id="textArea" onChange={handleOnClick} value={text} rows="5"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={clickUpperBtn}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={clickLowerBtn}>Convert to LowerCase</button>
            </div>
            <div className='container'>
                <h2>Count</h2>
                <p>{text.split(" ").length} Words and {text.length} Character</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>        
    ) 
} 