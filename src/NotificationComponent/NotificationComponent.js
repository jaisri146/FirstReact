import React from "react";
import './NotificationComponent.css';
import { BsArrowRight } from "react-icons/bs";
const NotificationComponent = () => {
    return(
        <>
         <div className="grid-container2">
             <div className="grid-items1">
                <h1>UI Templates are on their way 🚀</h1>
                <p>Official UI templates build on Atomize React will be released very soon.</p>
             </div>
             <div className="grid-items2">
               <button className="button">Get notified <BsArrowRight /></button>
             </div>
           
         </div>
        </>
    )
}
export default NotificationComponent;
