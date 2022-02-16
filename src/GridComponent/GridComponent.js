import React from "react";
import './GridComponent.css'
const GridComponent = () =>{
    return(
        <>
          <div className="horiz">
          <div className="grid-container1">
            <div className="grid-items">
               <h4>15+</h4>
               <p>Ready to use React<br /> Components</p>
            </div>
            <div className="grid-items">
               <h4>60+</h4>
               <p>Predefined colors for<br /> theme setup</p>
            </div>
            <div className="grid-items">
               <h4>70</h4>
               <p>Detailed documentation<br /> for each component</p>
            </div>  
            <div className="grid-items">
               <h4>FREE</h4> 
               <p>Open source with regular<br /> updates</p>
            </div>
          </div>
          </div>
        </>
    )
}
export default GridComponent;