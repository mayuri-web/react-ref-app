import React, { useRef, useState } from 'react'

function UncontrolForm() {
    const inputRef = useRef(null);
    const [name, setName] = useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const showName = inputRef.current.value;
        showName === "" ? alert("Please enter your name.") : setName(true);
    }
  return (
    <>
        <div className='card'>
            <form action='' onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name.' ref={inputRef} />
                <br/><br/>
                <button >Submit</button>
            </form>
            <p>
                {
                    name ? `Your name is ${inputRef.current.value}` : null
                }
            </p>
        </div>
    </>
  )
}

export default UncontrolForm
