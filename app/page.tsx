import DashboardLayout from "@/components/Layouts/DashboardLayout";

export default function Home() {
  const isAuth = true;
  return isAuth ? (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-center">Hello World!</h1>
    </DashboardLayout>
  ) : (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <h1 className="text-4xl font-bold text-center">Welcome to Next.js</h1>
      </div>
    </main>
  );
}
