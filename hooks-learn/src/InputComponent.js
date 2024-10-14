import { useState } from "react";

export default function InputComponent() {
    const [inputText, setText] = useState("hello");

    function handleChange(event) {
        setText(event.target.value);
    }
    return (
    <> 
      <input type = "text" value = {inputText} onChange={handleChange} />
        <p> You typed: {inputText}</p>  
        <button onClick={() => setText("Hello")}>Reset</button>
    </> 
    );

}