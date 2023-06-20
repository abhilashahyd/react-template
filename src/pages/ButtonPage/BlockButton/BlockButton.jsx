import React from "react";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const BlockButton = () => {
  const btnName = [
    <div className="d-grid button-list">
      <QButton qbtnCls="btn btn-primary" label="Block Button" />
      <QButton qbtnCls="btn btn-sm btn-info" label="Block Button" />
      <QButton qbtnCls="btn btn-xs btn-success" label="Block Button" />
    </div>,
  ];

  const btnCode = [
    `<div className="d-grid">
        <QButton qbtnCls="btn btn-primary" label="Block Button"/>
        <QButton qbtnCls="btn btn-sm btn-info" label="Block Button"  />
        <QButton qbtnCls="btn btn-xs btn-success" label="Block Button" />
        </div>`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];
  return (
          <QCard
            title="BLOCK BUTTON"
            subtitle="Create block level buttons by adding class .d-grid to parent div."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default BlockButton;
