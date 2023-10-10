import React from "react";
import { ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";

type Props = {
  name: string;
};
const FormikErrorMessage = ({ name }: Props) => {
  return (
    <ErrorMessage
      name={name}
      render={(message: string) => {
        if (typeof message !== "string") return;
        return <FormHelperText error>{message}</FormHelperText>;
      }}
    />
  );
};

export default FormikErrorMessage;
