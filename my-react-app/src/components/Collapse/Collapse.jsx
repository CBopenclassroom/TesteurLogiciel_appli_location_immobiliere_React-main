import "./collapse.css"
import vector from "./../../assets/Vector.png"
import React, { useState } from 'react';

function Collapse({ title, text }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    


    return (
        <div className="collapse-wrapper">
            <div className="collapse-container">
                <p>{title}</p>
                <img src={vector} alt="vector" className={`collapsible ${isCollapsed ? 'rotated-image' : ''}`} onClick={() => setIsCollapsed(!isCollapsed)}></img>
            </div>

            <div className={`content ${isCollapsed ? 'active' : ''}`}>
                {Array.isArray(text) ? (<ul>
                    {text.map((element) => (<li key={element}>{element}</li>))}
                </ul>) : <p>{text}</p>}
            </div>

        </div>
    )
}


export default Collapse