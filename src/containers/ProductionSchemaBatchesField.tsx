import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import {
  Box,
  Button,
  Fab,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  styled
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const FormikTextField = ({ field, ...props }) => (
  <TextField {...field} {...props} />
);

type Props = {
  name: string;
  batches: any[];
  parentIndex: number;
};
const ProductionSchemaBatchesField = ({
  name,
  batches,
  parentIndex
}: Props) => {
  // console.log('batches', `${name}.${index}.productionDay`)
  return (
    <FieldArray name={name}>
      {({ remove, insert }) => (
        <div className="flexColumn stretchSelf">
          <Stack spacing={1} className="stretchSelf">
            {batches.length &&
              batches.map((_, index: number) => (
                <div
                  key={parentIndex + index}
                  className="flexColumn justifyCenter"
                >
                  <Stack spacing={1}>
                    <Field
                      name={`${name}.${index}.productionDay`}
                      component={FormikTextField}
                      placeholder="Day"
                      variant="standard"
                    />
                    <ErrorMessage
                      name={`${name}.${index}.productionDay`}
                      render={(message: string) => (
                        <FormHelperText error>{message}</FormHelperText>
                      )}
                    />
                  </Stack>
                </div>
              ))}
            <Stack spacing={0}>
              <ErrorMessage
                name={name}
                render={(message: string) => {
                  if (typeof message !== "string") return;
                  return <FormHelperText error>{message}</FormHelperText>;
                }}
              />
            </Stack>
          </Stack>
        </div>
      )}
    </FieldArray>
  );
};

export default ProductionSchemaBatchesField;
