import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption/SidebarOption'

import LanguageIcon from '@material-ui/icons/Language';
import SaveIcon from '@material-ui/icons/Save';
import FlagIcon from '@material-ui/icons/Flag';
import PublicIcon from '@material-ui/icons/Public';
import RoomIcon from '@material-ui/icons/Room';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SettingsIcon from '@material-ui/icons/Settings';
function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="topBar">
                <h1>Anti Bias Bot</h1>
            </div>
            <div className="options">
                <SidebarOption text="Top Topics" active Icon={LanguageIcon}/>
                <SidebarOption text="Saved Topics" Icon={SaveIcon}/>
                <div className="divider" />
                <SidebarOption text="U.S." Icon={FlagIcon}/>
                <SidebarOption text="World" Icon={PublicIcon}/>
                <SidebarOption text="Local" Icon={RoomIcon}/>
                <SidebarOption text="Covid" Icon={NewReleasesIcon}/>
                <div className="divider" />
                <SidebarOption text="Settings" Icon={SettingsIcon}/>
            </div>
        </div>
    )
}

export default Sidebar
