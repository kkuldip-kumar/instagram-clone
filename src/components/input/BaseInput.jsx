import React, { useRef, forwardRef } from "react";
import { useField } from "formik";
import {} from "react";

const BaseInput = forwardRef((props, ref) => {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);
  // const inputRef = useRef(null);
  return (
    <>
      {/* <label
        htmlFor={props.id || props.name}
        className="test-black mb-4 text-base font-semibold capitalize"
      >
        {label}
      </label> */}
      <div className="relative">
        {/* type={type} */}
        <input
          ref={ref}
          id={field.name}
          {...field}
          {...props}
          className={`leading-p-3 text-gray-700  w-full appearance-none rounded  border border-stone-200 text-base focus:border-stone-300 focus:shadow focus:outline-none  focus:ring-0  ${
            meta.touched && meta.error ? "!border-red-500" : ""
          }`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {meta.touched && meta.error ? (
            <svg
              className="h-4 w-4 text-red-500"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          ) : null}
        </div>
      </div>
      {meta.error && meta.touched ? (
        <p className="text-sm font-normal text-red-500">{meta.error}</p>
      ) : null}
    </>
  );
});

export default BaseInput;
