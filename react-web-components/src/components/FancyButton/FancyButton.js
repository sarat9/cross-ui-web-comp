import React from 'react';


function FancyButton() {
    return <>
            <button 
                style={{height:'100px', width:'120px', 
                            fontSize:"24px", background: '#00bcd4',
                            fontWeight: 700}} 
                type="button">
            Fancy Button!!!
            </button>
            <p style={{fontSize:'14px'}}>Fancy Button Component is React Component</p>
        </>
}

export default FancyButton