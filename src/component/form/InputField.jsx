import React from "react";

export const InputField = ({
  label,
  value,
  type = "text",
  registration,
  error,
}) => {
  return (
    <div className="inputfield-form">
      <label>{label}</label>
      <div className="form-row">
        <input type={type} value={value} {...registration} />
      </div>
      {error && <div className="error-msg">{error.message}</div>}
    </div>
  );
};
