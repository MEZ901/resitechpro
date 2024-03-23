import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";

const Users = () => {
  return (
    <div className="mx-auto">
      <Breadcrumb pageName="Users Managment" />

      <div>
        <TableThree />
      </div>
    </div>
  );
};

export default Users;
