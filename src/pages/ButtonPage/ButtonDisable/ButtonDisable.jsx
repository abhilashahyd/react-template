import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const ButtonDisable = () => {
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-info" label="Info" disabled />
      <QButton qbtnCls="btn btn-success" label="Success" disabled />
      <QButton qbtnCls="btn btn-danger" label="Danger" disabled />
      <QButton qbtnCls="btn btn-dark" label="Dark" disabled />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-info" label="Info" disabled />
    <QButton qbtnCls="btn btn-success" label="Success" disabled />
    <QButton qbtnCls="btn btn-danger" label="Danger" disabled />
    <QButton qbtnCls="btn btn-dark" label="Dark" disabled />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
          <QCard
            title="BUTTON-DISABLED"
            subtitle="Add the disabled attribute to <button> buttons."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default ButtonDisable;
