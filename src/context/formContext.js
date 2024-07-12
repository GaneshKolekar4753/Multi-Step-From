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
  let getLTCalleed = false;
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      getLTCalleed = !getLTCalleed;
      // console.log("if getLocalstorege");
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    if (!getLTCalleed) {
      localStorage.setItem("formData", JSON.stringify(formData));
      // console.log("setlocalstorege");
    }
  }, [formData]);

  const validation = () => {
    const currentErrors = {};
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone validation regex 
    const phoneRegex = /^\d{10}$/;
    // Zip Code validation regex 
    const zipCodeRegex = /^\d{6}(-\d{4})?$/;

    if (step === 0) {
      // Step 1: Personal Information
      if (!formData.name) {
        currentErrors.name = "Name is required";
      }
      if (!formData.email) {
        currentErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        currentErrors.email = "Invalid email format";
      }
      if (!formData.phone) {
        currentErrors.phone = "Phone is required";
      } else if (!phoneRegex.test(formData.phone)) {
        currentErrors.phone = "Invalid phone number format";
      }
    } else if (step === 1) {
      // Step 2: Address Information
      if (!formData.addressLine1) {
        currentErrors.addressLine1 = "Address Line 1 is required";
      }
      if (!formData.city) {
        currentErrors.city = "City is required";
      }
      if (!formData.state) {
        currentErrors.state = "State is required";
      }
      if (!formData.zipCode) {
        currentErrors.zipCode = "Zip Code is required";
      } else if (!zipCodeRegex.test(formData.zipCode)) {
        currentErrors.zipCode = "Invalid zip code format";
      }
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };
  return (
    <formContext.Provider
      value={{
        step,
        setStep,
        errors,
        setErrors,
        formData,
        setFormData,
        steps,
        validation,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export const useFormState = () => useContext(formContext);
