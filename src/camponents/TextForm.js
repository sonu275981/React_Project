import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const clickupperform = () => {
        console.log("button is clicked" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext)
    }
    const clicklowerform = () => {
        console.log("button is clicked" + Text);
        let newtext = Text.toLowerCase();
        setText(newtext)
    }
    
    const handleonchange = (event) => {
        console.log("change after click");
        setText(event.target.value)
    }
    // Declare a new state variable, which we'll call "Text" (HOOKS)
    const [Text, setText] = useState('');

    return (
        <>
        <div className='container'>
            <h1>{props.textarea}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label"></label>  onClick={() => setColor("blue")} */}
                <textarea className="form-control" value={Text} onChange = {handleonchange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={clickupperform}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={clicklowerform}>Convert to Lowercase</button>

        </div>
        <div className='container my-3'>
              <h4>Your text summary</h4>
              <p>{Text.split(" ").length} words, {Text.length} charcters</p>
              <p>{0.008 * Text.split(" ").length} Minutes read</p>
              <h5>Preview</h5>
              <p>{Text}</p>
              <p>{props.Text}</p>

        </div>
        
        </>
    )
}
TextForm.propTypes = {
    textarea: PropTypes.string.isRequired
}
