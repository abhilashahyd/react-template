import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import MainHeader from './components/Layout/MainHeader';
import MainSidebar from './components/Layout/MainSidebar';
import QTextInput from './components/Forms/QTextInput';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import { Route, Switch } from 'react-router-dom';
import QPassword from './components/Forms/QPassword';
import QButton from './components/BaseUI/QButton';
import QDropdown from './components/BaseUI/QDropdown';
import QTextArea from './components/Forms/QTextArea';
import QCard from './components/BaseUI/QCard';
import Profile from './pages/Profile';
import QChooseFile from './components/Forms/QChooseFile';
import QDate from './components/Forms/QDate';
import QLabel from './components/Forms/QLabel/QLabel';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import QToast from './components/BaseUI/QToast';
import QCheckbox from './components/Forms/QCheckbox';
import QCheckboxGroup from './components/Forms/QCheckboxGroup/QCheckboxGroup';
import QPlaceholder from './components/BaseUI/QPlaceholder';
import { AuthProvider, AuthConsumer } from 'react-check-auth';
import { useDispatch } from "react-redux";
import QProgressBar from './components/BaseUI/QProgressBar';
import ButtonPage from './pages/ButtonPage';
import PlaceholderPage from './pages/PlaceholderPage';
import TablePage from './pages/TablePage';
import DataTablePage from './pages/DataTablePage';
import TabsPage from './pages/TabsPage';
import ListPage from './pages/ListPage';
import QTooltip from './components/BaseUI/QTooltip/QTooltip';
import QAccordion from './components/BaseUI/QAccordion/QAccordion';
import QIcon from './components/BaseUI/QIcon/QIcon';
import Dashboard from './pages/Dashboard';
import StarterPage from './pages/StarterPage';
import ProfileImage from './components/BaseUI/ProfileImage';
import MaintenancePage from './pages/MaintenancePage';
import ErrorPage from './pages/ErrorPage';
import LockScreen from './pages/LockScreen';
import PricingPage from './pages/PricingPage';

function App() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSideBarHandler = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    }
    const token = localStorage.getItem('token');
    return (
        <div className="App">
            <Container className="full-height" fluid>
                {!token ? <Switch>
                    <Route exact path="/">
                        <Login></Login>
                    </Route>
                    <Route exact path="/pages/logout">
                        <Logout />
                    </Route>
                    <Route exact path="/pages/register">
                        <Register></Register>
                    </Route>
                </Switch> :
                    <Row className="full-height root-container">
                        <MainSidebar toggleSidebar={toggleSideBarHandler} isCollapsed={isSidebarCollapsed}></MainSidebar>
                        <section className="main-section">
                            <MainHeader toggleSidebar={toggleSideBarHandler}></MainHeader>

                            <Switch>
              <Route exact path="/form-fields/text-field">
                <QTextInput label="Default Label"></QTextInput>
              </Route>
              <Route exact path="/form-fields/password">
                <QPassword label="Default Label"></QPassword>
              </Route>
              <Route path="/form-fields/file-upload">
                <QChooseFile label="Default Label"></QChooseFile>
               </Route>
               <Route path="/form-fields/date">
                <QDate label="Default Label"></QDate>
               </Route>
               <Route path="/form-fields/label">
                <QLabel qlabelCls="text-center" label="Lorem Ipsum is simply dummy text of the printing and typesetting industry"></QLabel>
               </Route>
              <Route path="/form-fields/text-area">
                <QTextArea label="Text Area" rows={4} placeholder={"Text Area"}></QTextArea>
              </Route>
              <Route path="/form-fields/file-upload">
                <QChooseFile></QChooseFile>
              </Route>
              <Route path="/form-fields/card">
                <QCard title="default card title" subtitle="default subtitle" cardText=" this is a new card"
                clink="url1" alink="url2"></QCard>
              </Route>
              <Route path="/form-fields/checkbox">
              <QCheckbox checked={false} label="Default Label"/>
              </Route>
              <Route path="/form-fields/checkbox-group">
              <QCheckboxGroup/>
              </Route>

              <Route path="/tables/table">
              <TablePage></TablePage>
              </Route>
              <Route path="/tables/data-table">
              <DataTablePage></DataTablePage>
              </Route>
              <Route path="/base-ui/list">
              <ListPage></ListPage>   
               </Route>
              <Route path="/base-ui/card">
                <QCard title="default card title" subtitle="default subtitle" cardText=" this is a new card"
                clink="url1" alink="url2"></QCard>
              </Route>
              <Route exact path="/base-ui/button">
                <ButtonPage />
              </Route>
              <Route path="/base-ui/dropdown">
                <QDropdown label="Default Label" qdropdownCls="m-4"></QDropdown>
               </Route>
               <Route path="/base-ui/tabs">
               <TabsPage></TabsPage>
               </Route>
               <Route path="/base-ui/toast">
                <QToast/>
               </Route>
                <Route path="/base-ui/progress-bar">
                <StarterPage pageTitle="Progress bar">
                <div className="px-3"><QProgressBar/></div>
                  </StarterPage>
                </Route>
                <Route path="/base-ui/tooltip" >
                  <StarterPage pageTitle="Tooltip">
                    <QTooltip label="Tooltip on right" placement="right"><button class="btn btn-info ml-4">Hover to see tooltip</button></QTooltip>
                  </StarterPage>
                </Route>
                <Route path="/base-ui/accordion">
                  <StarterPage pageTitle="Accordion">
                    <div className="px-3"><QAccordion></QAccordion></div>
                  </StarterPage>
                </Route>
                <Route path="/base-ui/icon">
                  <StarterPage pageTitle="Icon">
                  <div className="-3 d-flex justify-content-around"><QIcon name="fa fa-chevron-down"/><QIcon name="fa fa-car"/><QIcon name="fa fa-spinner fa-spin"/><QIcon name="fa fa-twitter"/><QIcon name="fa fa-check-square"/><QIcon name="fa fa-refresh fa-spin"/></div>
                  </StarterPage>
                </Route>
              <Route path="/pages/login">
                <Login></Login>
              </Route>
              <Route path="/pages/register">
                <Register></Register>
              </Route>
              <Route path="/pages/profile">
                <Profile></Profile>
              </Route>            
              <Route path="/pages/recover-pwd">
                <ForgotPassword></ForgotPassword>
              </Route>
              <Route path="/base-ui/placeholder">
               <PlaceholderPage></PlaceholderPage>
              </Route>
              <Route path="/pages/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="/pages/maintenance-page">
                <MaintenancePage />
              </Route>
              <Route path="/pages/error-page">
                <ErrorPage />
              </Route>
              <Route path="/pages/lock-screen">
                <LockScreen />
              </Route>
              <Route path="/pages/pricing-page">
                <PricingPage />
              </Route>
              <Route path="/base-ui/profile-image">
                <ProfileImage />
              </Route>
            </Switch>
                        </section>
                    </Row>
                }
            </Container>
        </div>
    );
}

export default App;
