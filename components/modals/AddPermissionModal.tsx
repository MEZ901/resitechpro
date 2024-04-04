import { useCreatePermissionMutation } from "@/lib/features/iam/iamApiSlice";
import { useFormik } from "formik";
import { useState } from "react";
import Alert from "../ui-elements/Alert";
import createPermissionSchema from "@/schemas/iam/createPermissionSchema";

type AddPermissionModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: () => void;
};

type Action = { id: string; name: string };

const AddPermissionModal = ({
  open,
  setOpen,
  refetch,
}: AddPermissionModalProps) => {
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const [createPermission, { isLoading }] = useCreatePermissionMutation();

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
      resource: "",
      action: "",
    },
    validationSchema: createPermissionSchema,
    onSubmit: async (data) => {
      try {
        const createdPermission = await createPermission(data).unwrap();
        console.log(createdPermission);
        refetch();
        setOpen(false);
      } catch (error: any) {
        console.log(error);
        setError(error?.data?.message || "internal server error");
      }
    },
  });

  const actions = [
    { id: "create", name: "Create" },
    { id: "read", name: "Read" },
    { id: "update", name: "Update" },
    { id: "delete", name: "Delete" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        !open && "hidden"
      }`}
    >
      <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          Add Permission
        </h3>
        <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
        {error && (
          <Alert
            title="An error occurred while creating user"
            type="error"
            className="mb-3"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          {/* -- resource -- */}
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Resource
            </label>
            <input
              className={`w-full rounded-lg border bg-transparent py-4 pl-6 pr-10 text-black outline-none focus-visible:shadow-none dark:bg-form-input dark:text-white ${
                errors.resource && touched.resource
                  ? "border-red focus:border-red dark:border-red dark:focus:border-red"
                  : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
              }`}
              placeholder="resource"
              name="resource"
              type="text"
              value={values.resource}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <span className="text-sm text-red">
              {errors.resource && touched.resource ? errors.resource : null}
            </span>
          </div>

          {/* -- action -- */}
          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Action
            </label>

            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                value={values.action}
                onChange={(e) => {
                  setFieldValue("action", e.target.value);
                  changeTextColor();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                  isOptionSelected ? "text-black dark:text-white" : ""
                } ${
                  errors.action && touched.action
                    ? "border-red focus:border-red dark:border-red dark:focus:border-red"
                    : "border-stroke focus:border-primary dark:border-form-strokedark dark:focus:border-primary"
                }`}
              >
                <option
                  value=""
                  disabled
                  className="text-body dark:text-bodydark"
                >
                  Select Action
                </option>
                {actions?.map((action: Action) => (
                  <option
                    key={action.id}
                    value={action.id}
                    className="text-body dark:text-bodydark"
                  >
                    {action.name}
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
                {errors.action && touched.action ? errors.action : null}
              </span>
            </div>
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

export default AddPermissionModal;
