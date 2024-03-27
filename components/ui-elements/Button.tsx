import Link from "next/link";

type ButtonProps = {
  title: string;
  icon?: { align: "start" | "end"; icon: JSX.Element };
  rounded?: "none" | "md" | "full";
  variant?: "solid" | "bordered";
  className?: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({
  title,
  icon,
  rounded,
  variant,
  className,
  href,
  onClick,
  ...rest
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
      } ${className || ""}`}
      {...rest}
    >
      {icon?.align === "start" && <span>{icon.icon}</span>}
      {title}
      {icon?.align === "end" && <span>{icon.icon}</span>}
    </Link>
  );
};

export default Button;
