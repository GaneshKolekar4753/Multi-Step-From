import React, { useEffect } from "react";
import Setp1 from "./Setp1";
import { useFormState } from "../context/formContext";
import Setp2 from "./Step2";
import Setp3 from "./Step3";

const FormComponent = () => {
  const { step } = useFormState();

  const getFormStep = () => {
    if (step === 2) return <Setp3 />;
    else if (step === 1) {
      return <Setp2 />;
    } else {
      return <Setp1 />;
    }
  };
  return <div className="formComponent borderStyle">{getFormStep()}</div>;
};

export default FormComponent;
