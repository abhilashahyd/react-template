import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const OutlineRoundedButton = () => {
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-outline-primary btn-rounded" label="Primary" />
      <QButton
        qbtnCls="btn btn-outline-secondary btn-rounded"
        label="Secondary"
      />
      <QButton qbtnCls="btn btn-outline-success btn-rounded" label="Success" />
      <QButton qbtnCls="btn btn-outline-danger btn-rounded" label="Danger" />
      <QButton qbtnCls="btn btn-outline-warning btn-rounded" label="Warning" />
      <QButton qbtnCls="btn btn-outline-info btn-rounded" label="Info" />
      <QButton qbtnCls="btn btn-outline-light btn-rounded" label="Light" />
      <QButton qbtnCls="btn btn-outline-dark btn-rounded" label="Dark" />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-outline-primary btn-rounded" label="Primary" />
        <QButton qbtnCls="btn btn-outline-secondary btn-rounded" label="Secondary" />
        <QButton qbtnCls="btn btn-outline-success btn-rounded" label="Success" />
        <QButton qbtnCls="btn btn-outline-danger btn-rounded" label="Danger" />
        <QButton qbtnCls="btn btn-outline-warning btn-rounded" label="Warning" />
        <QButton qbtnCls="btn btn-outline-info btn-rounded" label="Info" />
        <QButton qbtnCls="btn btn-outline-light btn-rounded" label="Light" />
        <QButton qbtnCls="btn btn-outline-dark btn-rounded" label="Dark" />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
          <QCard
            title="BUTTON OUTLINE ROUNDED"
            subtitle="Use a classes .btn-outline-** to quickly create a bordered buttons."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default OutlineRoundedButton;
