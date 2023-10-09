import React from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import {
  FormHelperText,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { weekDaysOptions } from "../utils/productionSchemasUtils";

const FormikTextField = ({ options = [], field, ...props }) => (
  <TextField {...field} {...props} />
);

// const FormikSelectField = ({ options, ...props }) => {
const FormikSelectField = ({ field, options, ...props }) => {
  console.log("field", props);
  return (
    <Select
      variant="standard"
      {...field}
      {...props}
      onChange={(e) => {
        props.form.setFieldValue(field.name, e.target.value);
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {/* <Checkbox
                  checked={values.productTypes.indexOf(option.value) > -1}
                  color="secondary"
              /> */}
          <ListItemText primary={option.label} />
        </MenuItem>
      ))}
    </Select>
  );
};

type Props = {
  name: string;
  batches: any[];
  parentIndex: number;
  setFieldValue: any;
};
const ProductionSchemaBatchesField = ({
  name,
  batches,
  parentIndex,
  setFieldValue
}: Props) => {
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
                      component={FormikSelectField}
                      placeholder="Day"
                      variant="standard"
                      options={weekDaysOptions}
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
