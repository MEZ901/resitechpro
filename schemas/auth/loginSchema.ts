import * as yup from "yup";

const loginSchema = yup.object().shape({
  emailOrUserName: yup.string().required("email or username is required"),
  password: yup.string().min(6).required("password is required"),
});

export default loginSchema;
