import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const RoundedButton = () => {
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-primary btn-rounded" label="Primary" />
      <QButton qbtnCls="btn btn-secondary btn-rounded" label="Secondary" />
      <QButton qbtnCls="btn btn-success btn-rounded" label="Success" />
      <QButton qbtnCls="btn btn-danger btn-rounded" label="Danger" />
      <QButton qbtnCls="btn btn-warning btn-rounded" label="Warning" />
      <QButton qbtnCls="btn btn-info btn-rounded" label="Info" />
      <QButton qbtnCls="btn btn-light btn-rounded" label="Light" />
      <QButton qbtnCls="btn btn-dark btn-rounded" label="Dark" />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-primary btn-rounded" label="Primary" />
    <QButton qbtnCls="btn btn-secondary btn-rounded" label="Secondary" />
    <QButton qbtnCls="btn btn-success btn-rounded" label="Success" />
    <QButton qbtnCls="btn btn-danger btn-rounded" label="Danger" />
    <QButton qbtnCls="btn btn-warning btn-rounded" label="Warning" />
    <QButton qbtnCls="btn btn-info btn-rounded" label="Info" />
    <QButton qbtnCls="btn btn-light btn-rounded" label="Light" />
    <QButton qbtnCls="btn btn-dark btn-rounded" label="Dark" />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
          <QCard
            title="BUTTON-ROUNDED"
            subtitle="Add .btn-rounded to default button to get rounded corners."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default RoundedButton;
