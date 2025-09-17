import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ children, onSubmit, options }) => {
  const methods = useForm({ ...options });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
