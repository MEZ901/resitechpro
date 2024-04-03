import * as yup from "yup";

const updateUserSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  roleId: yup.string().required("role is required"),
});

export default updateUserSchema;
