import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        {props.icon && props.icon}

        <input
          type={type}
          className={cn(
            `flex h-10 w-full rounded-lg border border-input bg-background ${
              props.icon ? "pl-9 pr-4 py-3" : "px-4 py-3"
            } text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-gray placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
