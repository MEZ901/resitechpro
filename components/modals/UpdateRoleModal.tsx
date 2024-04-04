import {
  useGetRolesQuery,
  useUpdateRoleMutation,
  useUpdateUserMutation,
} from "@/lib/features/iam/iamApiSlice";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Alert from "../ui-elements/Alert";
import updateUserSchema from "@/schemas/iam/updateUserSchema";
import createRoleSchema from "@/schemas/iam/createRoleSchema";

type Role = { id: string; name: string };

type UpdateRoleModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: () => void;
  role: Role;
};

const UpdateRoleModal = ({
  open,
  setOpen,
  refetch,
  role,
}: UpdateRoleModalProps) => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const { data: roles } = useGetRolesQuery({});

  const [updateRole, { isLoading }] = useUpdateRoleMutation();

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: role.name,
    },
    validationSchema: createRoleSchema,
    onSubmit: async (data) => {
      try {
        const updatedRole = await updateRole({ id: role.id, ...data }).unwrap();
        console.log(updatedRole);
        refetch();
        setOpen(false);
      } catch (error: any) {
        console.log(error);
        setError(error?.data?.message || "internal server error");
      }
    },
  });

  useEffect(() => {
    setFieldValue("name", role.name);
  }, [role]);

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        !open && "hidden"
      }`}
    >
      <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          Update Role
        </h3>
        <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
        {error && (
          <Alert
            title="An error occurred while updating user"
            type="error"
            className="mb-3"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          {/* -- name -- */}
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Name
            </label>
            <input
              className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 text-black outline-none focus-visible:shadow-none dark:bg-form-input dark:text-white ${
                errors.name && touched.name
                  ? "border-red focus:border-red dark:border-red dark:focus:border-red"
                  : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
              }`}
              placeholder="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <span className="text-sm text-red">
              {errors.name && touched.name ? errors.name : null}
            </span>
          </div>
          <div className="-mx-3 flex flex-wrap gap-y-4">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                type="button"
                className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button
                type="submit"
                className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoleModal;
