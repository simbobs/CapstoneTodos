import React from 'react'
import '../static/Popup.css'

const Popup = (props) => {

    if (!props.trigger) return null;

    const handleClick = () => {
        props.setTrigger(false);
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <span className="close close-btn" onClick={handleClick}>&times;</span>
                {props.children}
            </div>
        </div>
    )
}

export default Popup;