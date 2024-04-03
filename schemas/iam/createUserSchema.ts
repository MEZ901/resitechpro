import * as yup from "yup";

const createUserSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().min(6).required("password is required"),
  roleId: yup.string().required("role is required"),
});

export default createUserSchema;
