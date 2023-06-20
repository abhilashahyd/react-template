import React, {useState} from 'react';
import './MainHeader.scss'
import { faArrowAltCircleRight, faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ConfirmationModal from "../../BaseUI/ConfirmationModal";
import { LABEL_LOGOUT, LOG_OUT_CONFIRMATION_TEXT } from '../../../utils/Labels';
import _history  from '../../../utils/history';
import NotificationList from '../../BaseUI/NotificationList/NotificationList';
import { Link } from 'react-router-dom';


const MainHeader = ({toggleSidebar}) => {

    const [showConfirmation,setConfirmation] = useState(false);
    const [notificationEvent,setNotificationEvent] = useState("");

    const handleLogout = () => {
        setConfirmation(true);
    };

    const onHide = () => {
        setConfirmation(false);
    };

    const onConfirm = () => {
        setConfirmation(false);
        localStorage.clear();
        _history.push("/pages/logout");
    };

    const showNotification = (event) => {
        setNotificationEvent(event)
      
    }
    const hideNotification = () =>{
        setNotificationEvent("")

    }

    return (<React.Fragment>
        {showConfirmation && <ConfirmationModal body={LOG_OUT_CONFIRMATION_TEXT} title={LABEL_LOGOUT} show={showConfirmation} onHide={onHide} onConfirm={onConfirm}/>}

        <header>
            <Navbar bg="light">
                <Container>
                    <Navbar.Toggle fixed="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" fixed="top">
                        <Nav.Link href="#home"><i onClick={toggleSidebar} className={"toggle-sidebar fa fas fa-bars"} /></Nav.Link>
                        <Nav className="me-auto core-header d-flex align-items-center">
                            <Nav.Link href=""><FontAwesomeIcon icon={faBell} onClick={(event)=> showNotification(event) }/></Nav.Link>
                            <NavDropdown title={<span><img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-4.jpg" height="32px" className=" rounded-circle mr-2"/>user</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/pages/profile">My Account</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="#">Settings</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onSelect={handleLogout}><Link>Logout</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {notificationEvent && <NotificationList currentEvent={notificationEvent} onHideNotification={hideNotification}/>}
        </header>
        </React.Fragment>
    );
}

export default MainHeader;