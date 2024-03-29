function Validation(values) {
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email didn't match the expected format";
    } else {
      errors.email = ""; // Clear the error if it's valid
    }
  
    if (values.password === "") {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password didn't match the expected format";
    } else {
      errors.password = ""; // Clear the error if it's valid
    }
  
    return errors; // Return the errors object
  }
  
  export default Validation;
  