import React, { useEffect } from "react";
import FormComponent from "./FormComponent";
import TitleContainer from "./TitleContainer";
import { useFormState } from "../context/formContext";
import FinalStep from "./FinalStep";

const MainContainer = () => {
  const { steps, step,setFormData } = useFormState();
  const lastStep = steps.length - 1;
  
  return (
    <div className="mainContainer">
      {step > lastStep ? (
        <FinalStep />
      ) : (
        <>
          <TitleContainer />
          <FormComponent />
        </>
      )}
    </div>
  );
};

export default MainContainer;
