import React from 'react';
import './BaseComponent.css';

const BaseComponent = () => {
    return(
    <section className="more">
        <div className="grde">
            <div className="grid-container101">
                <div className="grid-items">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRkZDMTQ4IiByeD0iMyIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yMS41IDFMMjEuNSAzMU0xMC41IDFMMTAuNSAzMSIvPgogIDwvZz4KPC9zdmc+Cg==" className='East'></img>
                    <h3 className='hed1'>Flexible Grid</h3>
                    <p className='pra1'>Change grid variables or <br/>give decimal column size.</p>
                    <a href="#">see how</a>
                </div>
                <div className="grid-items">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjRkY2QjM4IiByeD0iMyIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0yLjczMzc2MDY3LDkuNDI0MzMxMDkgQzIuNTQ0NTAyMzEsOS4yMTk5MzIwNiAyLjI3ODU2MzYyLDkuMTAzNzM5MTIgMiw5LjEwMzczOTEyIEMxLjQ0NzcxNTI1LDkuMTAzNzM5MTIgMSw5LjU1MTQ1NDM3IDEsMTAuMTAzNzM5MSBMMSwyOSBDMSwzMC4xMDQ1Njk1IDEuODk1NDMwNSwzMSAzLDMxIEwyMC40MjI0NjM4LDMxIEMyMC42NzQzODQxLDMxIDIwLjkxNzAyMjYsMzAuOTA0OTE3MyAyMS4xMDE4NzE4LDMwLjczMzc2MDcgQzIxLjUwNzExNjYsMzAuMzU4NTM0IDIxLjUzMTQ1MTEsMjkuNzI1ODM2OCAyMS4xNTYyMjQ1LDI5LjMyMDU5MiBMMi43MzM3NjA2Nyw5LjQyNDMzMTA5IFoiLz4KICA8L2c+Cjwvc3ZnPgo=" className='west'></img>
                    <h3 className='hed2'>Style guide</h3>
                    <p className='pra2'>Update theme throughout<br/>the application easily.</p>
                    <a href="#">see how</a>
                </div>
                <div className="grid-items">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMUNEQjlFIiByeD0iMyIvPgogICAgPHJlY3Qgd2lkdGg9IjExIiBoZWlnaHQ9IjExIiB4PSIyMCIgeT0iMjAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHg9IjEiIHk9IjEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4K" className='north'></img>
                    <h3 className='hed3'>Spacing</h3>
                    <p className='pra3'>A better and controlled<br/>way of update spacing.</p>
                    <a href="#">see how</a>
                </div>
                <div className="grid-items">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjE2IiB4PSIyMCIgeT0iMTYiIGZpbGw9IiM0M0E0RkYiIHJ4PSIzIi8+CiAgICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMTEiIGZpbGw9IiM0M0E0RkYiIHJ4PSIzIi8+CiAgICA8cmVjdCB3aWR0aD0iMTEiIGhlaWdodD0iMTQiIHg9IjEiIHk9IjE3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+Cg==" className='south'></img>
                    <h3 className='hed4'>Responsive</h3>
                    <p className='pra4'>Better control to make the<br/>app responsive.</p>
                    <a href="#">see how</a>
                    </div>
                </div>
                </div>
                </section>
)
}
export default BaseComponent;
