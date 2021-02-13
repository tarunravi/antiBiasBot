import React from 'react'
import './SidebarOption.css'

function SidebarOption({text, active, Icon}) {
    return (
        <div className={`SidebarOption ${active ? 'SidebarOption--active' : ''}`}>
            <Icon />
            <h1>{text}</h1>
        </div>
    )
}

export default SidebarOption
