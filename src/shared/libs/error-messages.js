export const checkErrors = (type,errors) => {
  if (type === "name" && errors && errors.name) {
    if (errors.name.type === "required") {
      return "Name is required";
    }
    if (errors.name.type === "minLength") {
      return "name is too short, name must be at least 6 characters";
    }
    if (errors.name.type === "maxLength") {
      return "name is too long, name must be at max 32 characters";
    }
  }
  if (type === "email" && errors && errors.email) {
    if (errors.email.type === "required") {
      return "Email is required";
    }
    if (errors.email.type === "pattern") {
      return "Invalid Email";
    }
    if (errors.email.type === "validate") {
      return "Invalid value, please add a valid email";
    }
  }
  if (type === "username" && errors && errors.username) {
    if (errors.username.type === "required") {
      return "username is required";
    }
    if (errors.username.type === "minLength") {
      return "username is too short, username must be at least 6 characters";
    }
    if (errors.username.type === "maxLength") {
      return "username is too long, username must be at max 32 characters";
    }
  }
  if (type === "password" && errors && errors.password) {
    if (errors.password.type === "required") {
      return "Password is required";
    }
    if (errors.password.type === "minLength") {
      return "Password is too short, password must be at least 6 characters";
    }
    if (errors.password.type === "maxLength") {
      return "Password is too long, password must be at max 32 characters";
    }
  }
  if (type === "confirmPassword" && errors && errors.confirmPassword) {
    if (errors.confirmPassword.type === "required") {
      return "Password is required";
    }
    if (errors.confirmPassword.type === "minLength") {
      return "Password is too short, password must be at least 6 characters";
    }
    if (errors.confirmPassword.type === "maxLength") {
      return "Password is too long, password must be at max 32 characters";
    }
    if (errors.confirmPassword.type === "validate") {
      return "Password doesnot match";
    }
  }
  return null;
};