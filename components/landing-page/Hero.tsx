import Image from "next/image";
import Button from "../ui-elements/Button";

const Hero = () => {
  return (
    <section className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="place-self-center mr-auto lg:col-span-7">
        <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-black dark:text-white">
          Managment tool for property owners
        </h1>
        <p className="mb-6 max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl">
          From managing residents to tracking maintenance requests to collecting
          rent, ResiTech Pro is the all-in-one solution for property owners.
        </p>
        <Button
          title="Get started"
          rounded="md"
          variant="bordered"
          href="/auth/signup"
          icon={{
            align: "end",
            icon: (
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ),
          }}
        />
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
          src={"/images/cover/property.jpg"}
          alt="Property management"
          width={970}
          height={260}
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
