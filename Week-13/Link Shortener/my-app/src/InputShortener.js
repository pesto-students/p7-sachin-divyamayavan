import React, { useState } from 'react'

const InputShortener = ( {setInputValue}) => {
    const [value, setValue] = useState("");

const handleClick = () => {
    setInputValue(value);
    setValue("");
}

  return (
    <div className="inputContainer">
        <h1>URL <span>Shortener</span></h1>
        <div>
            <input 
            type = "text" 
            placeholder='Shorten a link here...' 
            value={value}
            onChange={e =>setValue(e.target.value)}
            />
            <button onClick={handleClick}>Shorten it!</button>
        </div>
    </div>
  )
}

export default InputShortener;