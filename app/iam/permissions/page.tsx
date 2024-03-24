import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";

const Permissions = () => {
  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Permissions Managment" />

      <div>
        <TableThree />
      </div>
    </div>
  );
};

export default Permissions;
