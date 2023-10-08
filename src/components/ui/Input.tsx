import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface ILabel {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps & ILabel>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="form-control w-full max-w-xs">
        {label && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <input
          type={type}
          className="input input-bordered w-full max-w-xs"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
