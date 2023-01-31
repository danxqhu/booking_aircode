import React from 'react';
import './topbar.css';
// import { LanguageIcon } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon></NotificationsNoneIcon>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon></LanguageIcon>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon></SettingsIcon>
          </div>
          <img src="https://www.silicon.co.uk/wp-content/uploads/2011/12/Steve-Jobs-BW-obit-square.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
