import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";
import './MainSidebar.scss';

const MainSidebar = ({ isCollapsed, toggleSidebar }) => {
    return (
        // <aside>
        <ProSidebar breakPoint={`sm app-sidebar ${isCollapsed ? "" : "toggled"}`} onToggle={toggleSidebar} {...(isCollapsed && { collapsed: true })}>
            <Menu iconShape="square">
                <Navbar.Brand href="/home">Quick Strap</Navbar.Brand>
                <MenuItem icon={<i className="fa fa-file"></i>}><Link to="/pages/dashboard">Dashboard</Link></MenuItem>
                <MenuItem>Components</MenuItem>
                <SubMenu title="Form Fields" icon={<i className="fa fa-file"></i>}>
                    <MenuItem><Link to="/form-fields/text-field">Text Field</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/text-area">Text Area</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/password">Password</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/file-upload">File Upload</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/date">Date</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/label">Label</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/checkbox">Checkbox</Link></MenuItem>
                    <MenuItem><Link to="/form-fields/checkbox-group">Checkbox Group</Link></MenuItem>
                </SubMenu>
                <SubMenu title="Tables" icon={<i class="fa fa-table"></i>}>
                    <MenuItem><Link to="/tables/table">Table</Link></MenuItem>
                    <MenuItem><Link to="/tables/data-table">Data Table</Link></MenuItem>
                </SubMenu>

                <SubMenu title="Base UI" icon={<i class="fa fa-list"></i>}>
                    <MenuItem><Link to="/base-ui/list">List</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/card">Card</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/button">Button</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/dropdown">Drop Down</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/tabs">Tabs</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/toast">Toast</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/placeholder">Placeholder</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/progress-bar">Progress Bar</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/tooltip">Tooltip</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/accordion">Accordion</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/icon">Icon</Link></MenuItem>
                    <MenuItem><Link to="/base-ui/profile-image">Upload Image</Link></MenuItem>
                </SubMenu>

                <MenuItem>Custom</MenuItem>
                <SubMenu title="Pages" icon={<i class="fa fa-copy"></i>}>
                    {/* <MenuItem><Link to="/">Login</Link></MenuItem> */}
                    <MenuItem><Link to="/pages/register">Register</Link></MenuItem>
                    <MenuItem><Link to="/pages/recover-pwd">Recover Password</Link></MenuItem>
                    {/* <MenuItem><Link to="/pages/logout">Logout</Link></MenuItem> */}
                    <MenuItem><Link to="/pages/profile">Profile</Link></MenuItem>
                    <MenuItem><Link to="/pages/maintenance-page">Maintenance page</Link></MenuItem>
                    <MenuItem><Link to="/pages/error-page">Error page</Link></MenuItem>
                    <MenuItem><Link to="/pages/lock-screen">Lock Screen</Link></MenuItem>
                    <MenuItem><Link to="/pages/pricing-page">Pricing Page</Link></MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
        // </aside>
    );
}

export default MainSidebar;