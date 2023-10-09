import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

interface IExtraProps {
  label?: string;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps & IExtraProps>(
  ({ type, label, disabled, ...props }, ref) => {
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
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
