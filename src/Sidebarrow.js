import React from 'react'
import "./Sidebarrow.css"

function Sidebarrow({ selected, title, Icon }) {
    return (
        <div className={`sidebarrow ${selected && "selected"}`}>
            <Icon className="sidebarrow__icon" />
            <h2 className="sidebarrow__title">{title}</h2>
        </div>
    )
}

export default Sidebarrow
