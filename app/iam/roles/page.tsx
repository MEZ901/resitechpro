import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";

const Roles = () => {
  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Roles Managment" />

      <div>
        <TableThree />
      </div>
    </div>
  );
};

export default Roles;
