import Link from "next/link";

type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
  rounded?: "none" | "md" | "full";
  variant?: "solid" | "bordered";
  href?: string;
  onClick?: () => void;
};

const Button = ({
  title,
  icon,
  rounded,
  variant,
  href,
  onClick,
}: ButtonProps) => {
  return (
    <Link
      href={href || "#"}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 px-10 py-4 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10 ${
        rounded === "md"
          ? "rounded-md"
          : rounded === "full"
          ? "rounded-full"
          : ""
      } ${
        variant === "bordered"
          ? "border border-primary text-primary"
          : "bg-primary text-white"
      }`}
    >
      {icon && <span>{icon}</span>}
      {title}
    </Link>
  );
};

export default Button;
