import React from "react";
import "./style.scss";
import StarterPage from "../StarterPage";
import SimpleButton from "./SimpleButton";
import RoundedButton from "./RoundedButton";
import ButtonSize from "./ButtonSize";
import IconButton from "./IconButton";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import OutlineButton from "./OutlineButton";
import OutlineRoundedButton from "./OutlineRoundedButton";
import ButtonDisable from "./ButtonDisable";
import BlockButton from "./BlockButton/Index";

const ButtonPage = () => {
  return (
    <StarterPage pageTitle="Default button">
      <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="left-card col-5 bg-white p-3 mb-2 rounded">
          <SimpleButton />
        </div>
        <div className="right-card col-5 bg-white p-3 mb-2 rounded">
          <OutlineButton />
        </div>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="left-card col-5 bg-white p-3 mb-2 rounded">
          <RoundedButton />
        </div>
        <div className="right-card col-5 bg-white p-3 mb-2 rounded">
          <OutlineRoundedButton />
        </div>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="left-card col-5 bg-white p-3 mb-2 rounded">
          <ButtonSize />
        </div>
        <div className="right-card col-5 bg-white p-3 mb-2 rounded">
          <ButtonDisable />
        </div>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="left-card col-5 bg-white p-3 mb-2 rounded">
          <IconButton />
        </div>
        <div className="right-card col-5 bg-white p-3 mb-2 rounded">
          <BlockButton />
        </div>
      </div>
      <div className="row" style={{ justifyContent: "space-around" }}>
        <div className="left-card col-5 bg-white p-3 mb-2 rounded">
          <ButtonGroup />
        </div>
      </div>
    </StarterPage>
  );
};

export default ButtonPage;
