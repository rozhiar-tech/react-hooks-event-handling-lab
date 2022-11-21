// Code Keypad Component Here
import React from 'react';
function Keypad (){
    function handleKeyUp(event){
        console.log('Entering password... ' );
    }   
    return (
        <div>
            <input type="password" onChange={handleKeyUp}/>
        </div>
    )
}

export default Keypad;