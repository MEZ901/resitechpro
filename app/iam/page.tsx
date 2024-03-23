import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const page = async () => {
  revalidatePath("/iam");
  redirect("/iam/users");
};

export default page;
