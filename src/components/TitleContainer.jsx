import React from "react";
import { useFormState } from "../context/formContext";
import { Step, StepLabel, Stepper } from "@mui/material";

const TitleContainer = () => {
  const { step,steps } = useFormState();
  return (
    <div className="titleContainer borderStyle">
      <h1>Multi-Step Form</h1>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((item) => (
          <Step key={item}>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default TitleContainer;
