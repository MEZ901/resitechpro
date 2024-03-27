import Button from "../ui-elements/Button";

const CTA = () => {
  return (
    <section className="bg-white dark:bg-boxdark">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-boxdark dark:text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try ResiTech Pro Platform for 30 days. No credit card required.
          </p>
          <Button title="Free trial for 30 days" rounded="md" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
