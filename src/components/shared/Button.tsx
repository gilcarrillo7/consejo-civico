import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
};

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "outline",
}: ButtonProps) => {
  const baseClass = "px-6 py-2 rounded transition font-light";

  const variantClasses = {
    outline:
      "w-[220px] mx-auto mt-8 border border-white text-white hover:bg-white hover:text-primary",
    primary:
      "w-[220px] mx-auto border bg-primary border-primary text-white hover:bg-white hover:border-primary hover:text-primary",
    secondary:
      "w-[220px] mx-auto border border-secondary text-secondary hover:bg-secondary hover:text-white",
  };

  return (
    <div className="text-center sm:text-left">
      <button
        type={type}
        onClick={onClick}
        className={classNames(baseClass, variantClasses[variant], className)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
