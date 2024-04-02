import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import PermissionsTable from "@/components/Tables/PermissionsTable";

const Permissions = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="Permissions Managment" />

        <div>
          <PermissionsTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Permissions;
