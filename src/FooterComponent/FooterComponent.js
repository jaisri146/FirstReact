import React from "react";
import './FooterComponent.css';

const FooterComponent = () =>{
    return(
        <>
          <div className="grid-container3">
             <div className="grid-item3">
                 <p>Docs</p>
                 <ul>
                    <li><a href="#">Installation</a></li>
                    <li><a href="#">Theme Setup</a></li>
                    <li><a href="#">Grid</a></li>
                    <li><a href="#">Atoms</a></li>
                    <li><a href="#">Molecules</a></li>
                    <li><a href="#">Functions</a></li>
                 </ul>
             </div>
             <div className="grid-item3">
                 <p>Atomize</p>
                 <ul>
                    <li><a href="">Features</a></li>
                    <li><a href="">Design</a></li>
                    <li><a href="">Development</a></li>
                 </ul>
             </div>
             <div className="grid-item3">
                 <p>Resources</p>
                 <ul>
                    <li><a href="">Sketch File</a></li>
                    <li><a href="">Github</a></li>
                 </ul>
             </div>
             <div className="grid-item3">
                 <p>About</p>
                 <ul>
                    <li><a href="">Showcase</a></li>
                    <li><a href="">Contribute</a></li>
                 </ul>
             </div>
             <div className="grid-item3">
                 <p>Extras</p>
                 <ul>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Need Help?</a></li>
                    <li><a href="">Give Feedback</a></li>
                 </ul>
             </div>
          </div>
          <div className="foot">
              <p>Designed & Developed by Proksh Luthra</p>
              <div className="foot-img">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/800px-Font_Awesome_5_brands_github.svg.png" className="git"></img>
                </a>
                <a href="#">
                    <img src="https://www.svgrepo.com/show/333507/behance.svg" className="beh"></img>
                </a>
                <a href="#">
                    <img src="https://www.shareicon.net/data/128x128/2016/07/13/606671_black_4096x4096.png" className="drib"></img>
                </a>
                <a href="#">
                    <img src="https://www.pxpng.com/public/uploads/preview/-11629550269wndgq9aqpr.png" className="twit"></img>
                </a>
                <a href="#">
                    <img src="https://icon-library.com/images/linkedin-black-icon/linkedin-black-icon-5.jpg" className="link"></img>
                </a>
              </div>
          </div>
        </>
    )
}
export default FooterComponent;