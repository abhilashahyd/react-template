import React from "react";

import QCard from "../BaseUI/QCard";
import QTabs from "../BaseUI/QTabs";

const DefaultButton = () => {
  const btnName = [
    { qbtnCls: "btn btn-primary", label: "Primary" },
    { qbtnCls: "btn btn-secondary", label: "Secondary" },
    { qbtnCls: "btn btn-success", label: "Success" },
  ];

  // console.log(btnName)
  return (
    <div>
      <QCard title="default Button" subtitle="default text">
          <QTabs data={btnName}/>
      </QCard>
    </div>
  );
};
export default DefaultButton;
