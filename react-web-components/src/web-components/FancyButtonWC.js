import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from "react-to-webcomponent"


function FancyButtonWC() {
    return <>
            <button 
                style={{height:'100px', width:'120px', 
                            fontSize:"24px", background: '#00bcd4',
                            fontWeight: 700}} 
                type="button">
            Fancy Button!!!
            </button>
            <p style={{fontSize:'14px'}}>Fancy Button Component is a React Web Component</p>
        </>
}



const FancyButtonWebComp = reactToWebComponent(FancyButtonWC, React, ReactDOM);

customElements.define("fancy-button", FancyButtonWebComp);