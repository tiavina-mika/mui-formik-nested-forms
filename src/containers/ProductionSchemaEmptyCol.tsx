import React from "react";
import { Field, FieldArray } from "formik";
import {
  Box,
  IconButton,
  ListItemText,
  MenuItem,
  Select,
  Stack
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  productionSchemaBatchInitialValues,
  renderWeekDaysLabels,
  weekDaysOptions
} from "../utils/productionSchemasUtils";
import FormikErrorMessage from "../components/FormikErrorMessage";

const FormikSelectField = ({ field, options, ...props }) => {
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

const weekDays = ["productionDay", "packagingDay"];

type Props = {
  name: string;
  batches: any[];
  parentIndex: number;
};
const ProductionSchemaEmptyCol = ({ name, batches, parentIndex }: Props) => {
  return (
    <Box sx={{ width: 46 }} className="flexCenter">
      <IconButton
        onClick={() => {
          push(productionSchemaBatchInitialValues);
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default ProductionSchemaEmptyCol;
