import React from "react";
import "./style.scss";
import StarterPage from "../StarterPage";
import QList from "../../components/BaseUI/QList/QList";
import QLabel from "../../components/Forms/QLabel/QLabel";


const ListPage = () => {
    return (
        <StarterPage pageTitle="List Group">
            <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="left-card col-5 bg-white p-3 mb-2 rounded">
                    <QLabel label="basic example" qlabelCls="text-uppercase font-weight-bold" />
                    <QList data={[{ label: "Google Drive" }, { label: "Facebook Messenger" }, { label: "Apple Technology Company" }, { label: "Intercom Support System" }, { label: "Paypal Payment Gateway" }]}></QList>
                </div>

                <div className="right-card col-5 bg-white p-3 mb-2 rounded">
                    <QLabel label="active and disabled items" qlabelCls="text-uppercase font-weight-bold" />
                    <QList qlistCls="mt-10" data={[{ label: "Google Drive", active: true }, { label: "Facebook Messenger", disabled: true }, { label: "Apple Technology Company" }, { label: "Intercom Support System" }, { label: "Paypal Payment Gateway" }]}></QList>
                </div>
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="left-card col-5 bg-white p-3 mb-2 rounded">
                    <QLabel label="Contextual classes" qlabelCls="text-uppercase font-weight-bold" />
                    <QList data={[{ label: "A simple No style list group item" }, { label: "A simple primary list group item", variant: "primary" }, { label: "A simple secondary list group item", variant: "secondary" }, { label: "A simple success list group item", variant: "success" }, { label: "A simple danger list group item", variant: "danger" }, { label: "A simple warning list group item", variant: "warning" }, { label: "A simple info list group item", variant: "info" }, { label: "A simple light list group item", variant: "light" }, { label: "A simple dark list group item", variant: "dark" }]}></QList>
                </div>
                <div className="right-card col-5 bg-white p-3 mb-2 rounded">
                    <QLabel label="list with images and subText" qlabelCls="text-uppercase font-weight-bold" />
                    <QList qlistCls="notification-list" data={[{ label: "Karen Robinson", subText: "Wow ! this admin looks good and awesome design", imageURL: "https://coderthemes.com/hyper/saas/assets/images/users/avatar-4.jpg" }, { label: "New user registered.", subText: "1 min ago", imageURL: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" }, { label: "Cristina Pride", subText: "Hi, How are you? What about our next meeting", imageURL: "https://coderthemes.com/hyper/saas/assets/images/users/avatar-2.jpg" }, { label: "Karen Robinson", subText: "Hi, How are you?", imageURL: "https://coderthemes.com/hyper/saas/assets/images/users/avatar-4.jpg" }]}></QList>
                </div>
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="card col-5 bg-white p-3 mb-2 rounded">
                    <QLabel label="horizontal" qlabelCls="text-uppercase font-weight-bold" />
                    <QList horizontal={'sm'} qlistCls="horizontal-example-list" data={[{ label: "Google Drive", active: true }, { label: "Facebook Messenger", disabled: true }, { label: "Apple Technology Company" }, { label: "Intercom Support System" }]}></QList>
                </div>

                <div className="right-card col-5 bg-white p-3 mb-2 rounded">
                    <QLabel label="FLUSH" qlabelCls="text-uppercase font-weight-bold" />
                    <QList variant="flush" data={[{ label: "Google Drive" }, { label: "Facebook Messenger" }, { label: "Apple Technology Company" }, { label: "Intercom Support System" }, { label: "Paypal Payment Gateway" }]}></QList>
                </div>
            </div>
        </StarterPage>
    );
};

export default ListPage;
