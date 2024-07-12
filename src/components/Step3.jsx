import { Button } from "@mui/material";
import React from "react";
import { useFormState } from "../context/formContext";

const Setp3 = () => {
  const { formData, step, setStep } = useFormState();
  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    localStorage.removeItem("formData");
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <div className="form">
      <div className="inputItem">
        <h2>Data Confirmation</h2>
        {Object.keys(formData).map((item, index) => {
          return (
            <p
              key={index}
              style={{ fontWeight: "700", textAlign: "start", margin: "0.6em" }}
            >
              {item.toUpperCase()} : <span>{formData[item]}</span>
            </p>
          );
        })}
      </div>
      <div className="btnFields">
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Setp3;
