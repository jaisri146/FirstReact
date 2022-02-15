import React from "react";
import './CenterComponent.css'
import {BsFillCaretRightFill} from "react-icons/bs";

const CenterComponent = () => {
    return(
        <>
            <h1 className="head">Design System for React JS</h1>
            <p className="head2">Atomize React is a UI framework that helps developers collaborate with<br />designers and build consistent user interfaces effortlessly.</p>
        <div className="grid-container001">
                <button className="get">Get Started Now</button>
                <button className="watch" >< BsFillCaretRightFill />   watch Video</button>
        </div>
        </>
    )
}
export default CenterComponent;