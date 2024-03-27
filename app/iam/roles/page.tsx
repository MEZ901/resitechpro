import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import TableThree from "@/components/Tables/TableThree";

const Roles = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto">
        <Breadcrumb pageName="Roles Managment" />

        <div>
          <TableThree />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
