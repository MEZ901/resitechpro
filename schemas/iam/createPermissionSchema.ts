import * as yup from "yup";

const createPermissionSchema = yup.object().shape({
  resource: yup.string().required("resource is required"),
  action: yup.string().required("action is required"),
});

export default createPermissionSchema;
