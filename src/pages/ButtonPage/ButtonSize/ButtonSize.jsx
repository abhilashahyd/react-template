import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const ButtonSize = () => {
  const btnName = [
    <div className="row mt-2 ml button-list">
      <QButton qbtnCls="btn btn-primary btn-lg" label="Large" />
      <QButton qbtnCls="btn btn-info" label="Normal" />
      <QButton qbtnCls="btn btn-success btn-sm" label="Small" />
    </div>,
  ];

  const btnCode = [
    `<QButton qbtnCls="btn btn-primary btn-lg" label="Large" />
    <QButton qbtnCls="btn btn-info" label="Normal" />
    <QButton qbtnCls="btn btn-success btn-sm" label="Small" />`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
          <QCard
            title="BUTTON-SIZES"
            subtitle="Add .btn-lg, .btn-sm for additional sizes."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default ButtonSize;
