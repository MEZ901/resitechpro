import {
  useGetRolesQuery,
  useUpdateUserMutation,
} from "@/lib/features/iam/iamApiSlice";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Alert from "../ui-elements/Alert";
import updateUserSchema from "@/schemas/iam/updateUserSchema";

type User = {
  id: string;
  username: string;
  role: {
    id: string;
    name: string;
  };
};

type UpdateUserModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: () => void;
  user: User;
};

type Role = { id: string; name: string };

const UpdateUserModal = ({
  open,
  setOpen,
  refetch,
  user,
}: UpdateUserModalProps) => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const { data: roles } = useGetRolesQuery({});

  const [updateUser, { isLoading }] = useUpdateUserMutation();

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
      username: user.username,
      roleId: user.role.id,
    },
    validationSchema: updateUserSchema,
    onSubmit: async (data) => {
      try {
        const updatedUser = await updateUser({ id: user.id, ...data }).unwrap();
        console.log(updatedUser);
        refetch();
        setOpen(false);
      } catch (error: any) {
        console.log(error);
        setError(error?.data?.message || "internal server error");
      }
    },
  });

  useEffect(() => {
    setFieldValue("roleId", user.role.id);
    setFieldValue("username", user.username);
  }, [user]);

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        !open && "hidden"
      }`}
    >
      <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          Update User
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
          {/* -- username -- */}
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Username
            </label>
            <input
              className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 text-black outline-none focus-visible:shadow-none dark:bg-form-input dark:text-white ${
                errors.username && touched.username
                  ? "border-red focus:border-red dark:border-red dark:focus:border-red"
                  : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
              }`}
              placeholder="Username"
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <span className="text-sm text-red">
              {errors.username && touched.username ? errors.username : null}
            </span>
          </div>

          {/* -- password -- */}
          {/* <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Password
            </label>
            <input
              className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 text-black outline-none focus-visible:shadow-none dark:bg-form-input dark:text-white ${
                errors.password && touched.password
                  ? "border-red focus:border-red dark:border-red dark:focus:border-red"
                  : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
              }`}
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <span className="text-sm text-red ms-1">
              {errors.password && touched.password ? errors.password : null}
            </span>
          </div> */}

          {/* -- role -- */}
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Role
            </label>

            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                value={values.roleId}
                onChange={(e) => {
                  setFieldValue("roleId", e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                  isOptionSelected ? "text-black dark:text-white" : ""
                } ${
                  errors.roleId && touched.roleId
                    ? "border-red focus:border-red dark:border-red dark:focus:border-red"
                    : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
                }`}
              >
                <option
                  value=""
                  disabled
                  className="text-body dark:text-bodydark"
                >
                  Select Role
                </option>
                {roles?.map((role: Role) => (
                  <option
                    key={role.id}
                    value={role.id}
                    className="text-body dark:text-bodydark"
                  >
                    {role.name}
                  </option>
                ))}
              </select>

              <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>

              <span className="text-sm text-red">
                {errors.roleId && touched.roleId ? errors.roleId : null}
              </span>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap gap-y-4">
            <div className="w-full px-3 2xsm:w-1/2">
              <button
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

export default UpdateUserModal;
