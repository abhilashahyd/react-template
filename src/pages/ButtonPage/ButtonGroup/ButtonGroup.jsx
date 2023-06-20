import React from "react";
import "./style.scss";
import Row from "react-bootstrap/Row";
import QCard from "../../../components/BaseUI/QCard";
import QButton from "../../../components/BaseUI/QButton";
import QTabs from "../../../components/BaseUI/QTabs";

const ButtonGroup = () => {
  const btnName = [
    <div className="grid-container button-list">
      {/* button group */}
      <div className="btn-group mb-2">
        <QButton qbtnCls="btn btn-light" label="Left" />
        <QButton qbtnCls="btn btn-light" label="Middle" />
        <QButton qbtnCls="btn btn-light" label="Right" />
      </div>
      <div className="btn-group mb-2">
        <QButton qbtnCls="btn btn-light" label="1" />
        <QButton qbtnCls="btn btn-primary" label="2" />
        <QButton qbtnCls="btn btn-light" label="3" />
        <div className="btn-group">
          <QButton qbtnCls="btn btn-light dropdown-toggle" label="dropdown" />
        </div>
      </div>
      {/* vertical button  */}
      <div className="flex-container">
        <div className="btn-group-vertical mb-2">
          <QButton qbtnCls="btn btn-light" label="Top" />
          <QButton qbtnCls="btn btn-light" label="Middle" />
          <QButton qbtnCls="btn btn-light" label="Bottom" />
        </div>
        <div className="btn-group-vertical mb-2">
          <QButton qbtnCls="btn btn-light" label="Button 1" />
          <QButton qbtnCls="btn btn-light" label="Button 2" />
          <QButton qbtnCls="btn btn-light dropdown-toggle" label="Button 3" />
        </div>
      </div>
    </div>,
  ];

  const btnCode = [
    `<div className="btn-group mb-2">
        <QButton qbtnCls="btn btn-light" label="Left" />
        <QButton qbtnCls="btn btn-light" label="Middle" />
        <QButton qbtnCls="btn btn-light" label="Right" />
    </div>
    <div className="btn-group mb-2">
        <QButton qbtnCls="btn btn-light" label="1" />
        <QButton qbtnCls="btn btn-primary" label="2" />
        <QButton qbtnCls="btn btn-light" label="3" />
    <div className="btn-group">
      <QButton qbtnCls="btn btn-light dropdown-toggle" label="dropdown" />
    </div>
    </div>
    <div className="btn-group-vertical mb-2">
          <QButton qbtnCls="btn btn-light" label="Top" />
          <QButton qbtnCls="btn btn-light" label="Middle" />
          <QButton qbtnCls="btn btn-light" label="Bottom" />
        </div>
        <div className="btn-group-vertical mb-2">
          <QButton qbtnCls="btn btn-light" label="Button 1" />
          <QButton qbtnCls="btn btn-light" label="Button 2" />
          <QButton qbtnCls="btn btn-light dropdown-toggle" label="Button 3" />
        </div> 
    </div>`,
  ];

  const tabData = [
    { eventKey: "home", title: "Home", content: btnName },
    { eventKey: "about", title: "About", content: btnCode },
  ];

  return (
          <QCard
            title="BUTTON GROUP"
            subtitle="Wrap a series of buttons with .btn in .btn-group."
          >
            <QTabs data={tabData}></QTabs>
          </QCard>
  );
};

export default ButtonGroup;
