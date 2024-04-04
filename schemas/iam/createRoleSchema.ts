import * as yup from "yup";

const createRoleSchema = yup.object().shape({
  name: yup.string().required("name is required"),
});

export default createRoleSchema;
