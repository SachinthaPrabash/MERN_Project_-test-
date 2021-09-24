import React from 'react'
import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcons" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcons" />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcons" />
                                Products
                            </li>
                        </Link>
                        <Link to="/newUser" className="link">
                            <li className="sidebarListItem">
                                <AccountCircle className="sidebarIcons" />
                                New User
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcons" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                            Feadback
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcons" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcons" />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
