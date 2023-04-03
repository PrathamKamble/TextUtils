import React, { useState } from 'react';

export default function Form(props) {

    const UpChange = (event) =>{
        setText(event.target.value)
    }

    const UpClick = () =>{
    let newText = Text.toUpperCase();
        setText(newText)
    }

    const LoClick = () =>{
    let newText = Text.toLowerCase();
        setText(newText)
    }

    const Clear = () =>{
    let newText = '';
        setText(newText)
    }

    const Copy = () =>{
    let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const extraSpaces = () =>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [Text, setText] = useState('');

  return (
    <>
    <div className='container-fluid section text-center' style={{color: props.mode==='dark'?'white':'black'}}>
        <div className='container'>
            <h1><strong>Analyze Your <span className='gradient_text'>Text</span> Here</strong></h1>
            <div class="mb-3">
                <textarea class="form-control" value={Text} onChange={UpChange} id="myBox" rows="20" cols="10" placeholder='Enter Text Here'></textarea>
            </div>
                <button  className="button-86" onClick={extraSpaces}><i className="fas fa-eraser"></i></button>

                <button  className="button-86 mx-3 my-1" onClick={Copy}><i className="fas fa-copy"></i></button>

                <button  className="button-86 mx-3 my-1" onClick={UpClick}><i className="fas fa-a"></i></button>

                <button  className="button-86 mx-3 my-1" onClick={LoClick}><strong className='lowercase'>a</strong></button>

                <button  className="button-86 mx-3 my-1" onClick={Clear}><i className="fas fa-trash-can"></i></button>

                <p className='mt-3 counter'><span className='counter_num'>{Text.split(" ").filter((element)=>{return element.length!==0}).length}</span> words and <span className='counter_num'>{Text.length}</span> characters</p>
        </div>
    </div>
    </>
  )
}
