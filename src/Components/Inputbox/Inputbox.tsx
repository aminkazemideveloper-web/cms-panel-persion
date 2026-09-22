import clsx from "clsx";
import "./Inputbox.css";
import React, { useId, type ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
  error?: string | undefined;
  icon?: React.ReactNode;
};

const Inputbox: React.FC<InputProps> = ({
  error,
  label,
  icon,
  className,
  ...rest
}) => {
  const id = useId();
  return (
    <>
      <div className={clsx("input-box", className)}>
        {icon && <span>{icon}</span>}

        <input id={id} placeholder=" " {...rest} />

        <label htmlFor={id} className="lableText">
          {label}
        </label>
      </div>

      <span className="errorText">{error}</span>
    </>
  );
};

export default Inputbox;
