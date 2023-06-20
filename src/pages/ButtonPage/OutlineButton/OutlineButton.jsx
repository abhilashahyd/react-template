import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const OutlineButton = () => {
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-outline-primary " label="Primary" />
      <QButton qbtnCls="btn btn-outline-secondary" label="Secondary" />
      <QButton qbtnCls="btn btn-outline-success" label="Success" />
      <QButton qbtnCls="btn btn-outline-danger" label="Danger" />
      <QButton qbtnCls="btn btn-outline-warning" label="Warning" />
      <QButton qbtnCls="btn btn-outline-info" label="Info" />
      <QButton qbtnCls="btn btn-outline-light" label="Light" />
      <QButton qbtnCls="btn btn-outline-dark" label="Dark" />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-outline-primary " label="Primary" />
        <QButton qbtnCls="btn btn-outline-secondary" label="Secondary" />
        <QButton qbtnCls="btn btn-outline-success" label="Success" />
        <QButton qbtnCls="btn btn-outline-danger" label="Danger" />
        <QButton qbtnCls="btn btn-outline-warning" label="Warning" />
        <QButton qbtnCls="btn btn-outline-info" label="Info" />
        <QButton qbtnCls="btn btn-outline-light" label="Light" />
        <QButton qbtnCls="btn btn-outline-dark" label="Dark" />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
      <QCard
        title="BUTTON OUTLINE"
        subtitle="Use a classes .btn-outline-** to quickly create a bordered buttons.">
        <QTabs data={tabData}></QTabs>
      </QCard>
  );
};

export default OutlineButton;
