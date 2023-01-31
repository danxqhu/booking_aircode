import React from 'react';
import './sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import ErrorIcon from '@material-ui/icons/Error';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon"></LineStyleIcon>
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon"></TrendingUpIcon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon"></PermIdentityIcon>
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon"></StorefrontIcon>
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon"></AttachMoneyIcon>
              Transactions
            </li>
            <li className="sidebarListItem">
              <EqualizerIcon className="sidebarIcon"></EqualizerIcon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon"></MailOutlineIcon>
              Mail
            </li>
            <li className="sidebarListItem">
              <AllInboxIcon className="sidebarIcon"></AllInboxIcon>
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className="sidebarIcon"></ChatBubbleOutlineIcon>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CardTravelIcon className="sidebarIcon"></CardTravelIcon>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon"></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <ErrorIcon className="sidebarIcon"></ErrorIcon>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
