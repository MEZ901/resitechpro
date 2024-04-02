import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RolesTable from "@/components/Tables/RolesTable";

const Roles = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="Roles Managment" />

        <div>
          <RolesTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
