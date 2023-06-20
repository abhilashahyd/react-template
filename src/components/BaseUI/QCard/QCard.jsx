import React from "react";
import { Card } from "react-bootstrap";
import { DEFAULT_CARD_CONFIG } from "../../../utils/Constants";

const QCard = ({ title = "", subtitle="", children=[], ...otherProps}) => {
  
  return (
      <Card {...otherProps}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {subtitle}
          </Card.Subtitle>
          {children}
        </Card.Body>
      </Card>
  );
};
export default QCard;











