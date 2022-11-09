import React from 'react';
import PropTypes from "prop-types"
import * as ReactDOM from 'react-dom/client';
// When using React 16 and 17 import ReactDom with the commented statement below instead:
// import ReactDom from "react-dom"
import reactToWebComponent from "react-to-webcomponent"


function FancyButtonWC(props) {

    const { parentvalue, parentfunction } = props
    console.log('props', props)
    console.log('parentValue', parentvalue)

    console.log("parentfunction",parentfunction)

    return <>
            <button 
                style={{height:'100px', width:'120px', fontSize:"24px", background: '#00bcd4', fontWeight: 700}} 
                type="button"
                >
                Fancy Button!!! 
            </button>
            <p style={{fontSize:'14px'}}>Fancy Button Component is a React Web Component</p>
            <p style={{fontSize:'14px'}}>Displaying value passed from parent framework : {parentvalue}</p>
        </>
}

// FancyButtonWC.propTypes = {
//     parentvalue: PropTypes.string,
//   }
// const FancyButtonWebComp = reactToWebComponent(FancyButtonWC, React, ReactDOM);
// customElements.define("fancy-button", FancyButtonWebComp); 


// Other ways of defining the props

// customElements.define(
//     "fancy-button",
//     reactToWebComponent(FancyButtonWC, React, ReactDOM, {
//       props: {
//         parentvalue: String
//       },
//     }),
//   )

  customElements.define(
    "fancy-button",
    reactToWebComponent(FancyButtonWC, React, ReactDOM, {
      props: ["parentvalue", "parentfunction"]
    }),
  )



  // If Issues:
  // Cross-check your Node version, It should be `Node 14 or above`.
  // Cross-check your `import ReactDom` statement, based on the React version you are using.
  // Update to the latest version of react-to-webcomponent and prop-types