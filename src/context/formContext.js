import { createContext, useContext, useEffect, useState } from "react";

const formContext = createContext();

export const FormContext = ({ children }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const steps = ["Personal Information", "Address Information", "Confirmation"];
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    console.log("getLocalstorege");
    console.log(savedData)
    if (savedData) {
      console.log("if getLocalstorege");
      setFormData(savedData);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("setlocalstorege");
  }, [formData]);

  const validation = () => {
    const currentErrors = {};
    if (step === 0) {
      if (!formData.name) currentErrors.name = "Name is required";
      if (!formData.email) currentErrors.email = "Email is required";
      if (!formData.phone) currentErrors.phone = "Phone is required";
    } else if (step === 1) {
      if (!formData.addressLine1) currentErrors.addressLine1 = "Address Line 1 is required";
      if (!formData.city) currentErrors.city = "City is required";
      if (!formData.state) currentErrors.state = "State is required";
      if (!formData.zipCode) currentErrors.zipCode = "Zip Code is required";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };
  return (
    <formContext.Provider
      value={{ step, setStep, errors, setErrors, formData, setFormData,steps,validation }}
    >
      {children}
    </formContext.Provider>
  );
};

export const useFormState=()=>useContext(formContext);