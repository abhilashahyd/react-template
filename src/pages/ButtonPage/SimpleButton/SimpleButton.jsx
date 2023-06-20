import React from "react";
import Row from 'react-bootstrap/Row'
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton"
import QTabs from "../../../components/BaseUI/QTabs"

const SimpleButton = () => {
  //Simple Button Data
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-primary " label="Primary" />
      <QButton qbtnCls="btn btn-secondary" label="Secondary" />
      <QButton qbtnCls="btn btn-success" label="Success" />
      <QButton qbtnCls="btn btn-danger" label="Danger" />
      <QButton qbtnCls="btn btn-warning" label="Warning" />
      <QButton qbtnCls="btn btn-info" label="Info" />
      <QButton qbtnCls="btn btn-light" label="Light" />
      <QButton qbtnCls="btn btn-dark" label="Dark" />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-primary ma" label="Primary" />
    <QButton qbtnCls="btn btn-secondary" label="Secondary" />
    <QButton qbtnCls="btn btn-success" label="Success" />
    <QButton qbtnCls="btn btn-danger" label="Danger" />
    <QButton qbtnCls="btn btn-warning" label="Warning" />
    <QButton qbtnCls="btn btn-info" label="Info" />
    <QButton qbtnCls="btn btn-light" label="Light" />
    <QButton qbtnCls="btn btn-dark" label="Dark" />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
      <QCard
        title="DEFAULT BUTTONS"
        subtitle="Use the button classes on an <a>, <button>, or <input> element.">
        <QTabs data={tabData}></QTabs>
      </QCard>
  );
};

export default SimpleButton;
