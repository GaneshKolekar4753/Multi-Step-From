import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormState } from "../context/formContext";

const Setp2 = () => {
  const { errors, formData, setFormData, validation, step, setStep } =
    useFormState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (validation()) {
      setStep(step + 1);
    }
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  //Address Line 1, Address Line 2, City, State, Zip Code)
  return (
    <div className="form">
      <h2>Address</h2>
      <div className="formFields">
        <TextField
          className="inputField"
          error={errors.addressLine1 ? true : false}
          id="outlined-error-helper-text"
          label={errors.addressLine1 ? "Error" : "Adderess Line 1"}
          placeholder="Enter Your Address Line 1"
          helperText={errors.addressLine1 ? errors.addressLine1 : ""}
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
        />
        <TextField
          className="inputField"
          error={errors.addressLine2 ? true : false}
          id="outlined-error-helper-text"
          label={errors.addressLine2 ? "Error" : "Adderess Line 2"}
          placeholder="Enter Your Address Line 2"
          helperText={errors.addressLine2 ? errors.addressLine2 : ""}
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
        />
        <TextField
          className="inputField"
          error={errors.city ? true : false}
          id="outlined-error-helper-text"
          label={errors.city ? "Error" : "City"}
          placeholder="city name"
          helperText={errors.city ? errors.city : ""}
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        <TextField
          className="inputField"
          error={errors.state ? true : false}
          id="outlined-error-helper-text"
          label={errors.state ? "Error" : "State"}
          placeholder="state name"
          helperText={errors.state ? errors.state : ""}
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />

        <TextField
          className="inputField"
          error={formData.zipCode && errors.zipCode ? true : ""}
          id="outlined-error-helper-text"
          label={errors.zipCode ? "Error" : "zipCode"}
          placeholder="Your zipCode"
          helperText={errors.zipCode ? errors.zipCode : ""}
          type="number"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
      <div className="btnFields">
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Setp2;
