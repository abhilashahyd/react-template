import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const IconButton = () => {
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-light" label="Primary" />
      <QButton qbtnCls="btn btn-danger" label="Secondary" />
      <QButton qbtnCls="btn btn-dark" label="Success" />
      <QButton qbtnCls="btn btn-primary" label="Danger" />
      <QButton qbtnCls="btn btn-success" label="Warning" />
      <QButton qbtnCls="btn btn-info" label="Info" />
      <QButton qbtnCls="btn btn-warning" label="Light" />

      <QButton qbtnCls="btn btn-light" label="Like" />
      <QButton qbtnCls="btn btn-warning" label="Launch" />
      <QButton qbtnCls="btn btn-info" label="Cloud Hosting" />

      <QButton qbtnCls="btn btn-outline-success" label="Money" />
      <QButton qbtnCls="btn btn-outline-primary" label="PayPal" />
      <QButton qbtnCls="btn btn-outline-danger" label="Settings" />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-light" label="Primary" />
    <QButton qbtnCls="btn btn-danger" label="Secondary" />
    <QButton qbtnCls="btn btn-dark" label="Success" />
    <QButton qbtnCls="btn btn-primary" label="Danger" />
    <QButton qbtnCls="btn btn-success" label="Warning" />
    <QButton qbtnCls="btn btn-info" label="Info" />
    <QButton qbtnCls="btn btn-warning" label="Light" />

    <QButton qbtnCls="btn btn-light" label="Like" />
    <QButton qbtnCls="btn btn-warning" label="Launch" />
    <QButton qbtnCls="btn btn-info" label="Cloud Hosting" />

    <QButton qbtnCls="btn btn-outline-success" label="Money" />
    <QButton qbtnCls="btn btn-outline-primary" label="PayPal" />
    <QButton qbtnCls="btn btn-outline-danger" label="Settings" />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
          <QCard
            title="ICON BUTTONS"
            subtitle="Icon only button."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default IconButton;
