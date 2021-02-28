import React, { useState } from "react";
import { CaretRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import IconExport from "../../assets/IconExport";
import IconSetting from "../../assets/IconSetting";
import IconDraft from "../../assets/IconDraft";
import IconPublish from "../../assets/IconPublish";
import { JourneySteps } from "../../utils/static";
import "./appbar.css";
import { Button } from "antd";

const AppBar = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const jName = "Journey 83";
  return (
    <div className={"appbar"}>
      <div className={"appbar__header"}>
        <div>
          <ArrowLeftOutlined className={"appbar__header__icon"} />
          <input className={"appbar__name"} readOnly value={jName} />
        </div>
        <div className={"appbar__tools"}>
          {/* <div title="Setting">
            <IconSetting />
          </div>
          <div title="Export">
            <IconExport />
          </div>
          <div title="Draft Journey">
            <IconDraft />
          </div>
          <div title="Publish Journey">
            <IconPublish />
          </div> */}
          <div>
            <Button>SAVE DRAFT</Button>
            <Button type="primary">NEXT</Button>
          </div>
        </div>
      </div>
      <div className={"appbar__journey-steps"}>
        {JourneySteps.map((step, index) => (
          <div
            className={
              "journey-step" + (currentStep === index ? " active" : "")
            }
            key={index}
          >
            <div className={"journey-step__name"}>{step.name}</div>
            {JourneySteps.length > index + 1 && (
              <CaretRightOutlined style={{ color: "#eaeaea" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AppBar;
