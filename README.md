# Multi-Step Form with React and mui

## Objective:
Created a responsive multi-step form with three steps, ensuring data validation, error handling, and navigation controls using React.js. The form should persist data to local storage and enforce sequential completion of steps.

## Setup Instructions:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/GaneshKolekar4753/Multi-Step-From.git
   cd Multi-Step-From
   git checkout -b frontend

2. Install dependencies:
   ```bash
   npm install
   
3. Run the application:
   ```bash
   npm start


## Features:

### 1. Form Structure:
- Implement a multi-step form with three steps:
  - **Step 1: Personal Information**
    - Fields: Name, Email, Phone
  - **Step 2: Address Information**
    - Fields: Address Line 1, Address Line 2, City, State, Zip Code
  - **Step 3: Confirmation**
    - Review all entered data

### 2. Navigation and Buttons:
- Use tabbed navigation to switch between steps.
- Disable the back button on the first step.
- Disable the next button on the last step and replace it with a submit button.

### 3. Validation:
- Implement client-side validation to ensure all fields are filled before allowing navigation to the next step.
- Display appropriate error messages if fields are empty or invalid (e.g., email format).
- Highlight the fields with errors.

### 4. State Management:
- Manage form data using React state.

### 5. Local Storage:
- Persist entered data to local storage when the user navigates between steps.
- Retrieve and pre-fill form fields if the user revisits the form if form is pending to submit.

### 6. Responsive Design:
- Ensure the form is responsive and works well on desktop, tablet, and mobile screens.



