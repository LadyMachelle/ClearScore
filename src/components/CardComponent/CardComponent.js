import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import PillComponent from "../PillComponent/PillComponent";
import TooltipComponent from "../TooltipComponent/TooltipComponent";

const CardComponent = (props) => {
  return (
    <TooltipComponent direction="bottom">
      <Card>
        <CardBody>
          <PillComponent />
          <Button>{props.impact}</Button>
          <CardTitle>
            <h2>{props.header}</h2>
          </CardTitle>
          <CardText>
            <h3>{props.body}</h3>
          </CardText>
          <div className="linktext-container">
            <a className="link-text" href="http://clearscore.com">
              {props.text}
            </a>
          </div>
        </CardBody>
      </Card>
    </TooltipComponent>
  );
};

export default CardComponent;
