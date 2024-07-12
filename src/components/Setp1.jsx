import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormState } from "../context/formContext";

const Setp1 = () => {
  const { errors, formData, setFormData,validation,step,setStep } = useFormState();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext=()=>{
    if (validation()) {
      setStep(step + 1);
    }
  }
  // const handleBack=()=>{
  //   setStep(step-1);
  // }
  return (
    <div className="form">
      <h2>Personal Information</h2>
      <div className="formFields">

        <TextField className="inputField"
          error={ errors.name ? true : false}
          id="outlined-error-helper-text"
          label={errors.name ? "Error" : "Name"}
          placeholder="Your Name"
          helperText={errors.name ? errors.name : ""}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField className="inputField"
          error={ errors.email ? true : false}
          id="outlined-error-helper-text"
          label={errors.email ? "Error" : "Email"}
          placeholder="abc@gmail.com"
          helperText={errors.email ? errors.email : ""}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <TextField className="inputField"
          error={ errors.phone ? true : false}
          id="outlined-error-helper-text"
          label={errors.phone ? "Error" : "Phone"}
          placeholder="Your Phone"
          helperText={errors.phone ? errors.phone : ""}
          inputProps={{ style: { border: "white" } }}
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        
      </div>
      <div className="btnFields">
        {/* <Button variant="outlined" onClick={handleBack}>Back</Button> */}
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default Setp1;
