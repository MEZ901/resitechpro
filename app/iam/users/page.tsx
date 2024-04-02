import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import TableThree from "@/components/Tables/TableThree";
import UsersTable from "@/components/Tables/UsersTable";

const Users = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="Users Managment" />

        <div>
          <UsersTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;
