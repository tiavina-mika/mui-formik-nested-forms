import React from "react";
import { Field, FieldArray } from "formik";
import {
  IconButton,
  ListItemText,
  MenuItem,
  Select,
  Stack
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
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
const ProductionSchemaBatchesField = ({
  name,
  batches,
  parentIndex
}: Props) => {
  return (
    <FieldArray name={name}>
      {({ remove, push }) => (
        <div className="flexColumn stretchSelf">
          <Stack spacing={1} className="stretchSelf">
            {batches.length &&
              batches.map((batch, index: number) => (
                // row
                <div key={parentIndex + index} className="flexRow center">
                  {/* add button */}
                  <IconButton
                    onClick={() => {
                      push(productionSchemaBatchInitialValues);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                  {/* production day & packaging day */}
                  <Stack direction="row" spacing={2}>
                    {weekDays.map((weekday, weekDayIndex) => (
                      <Stack spacing={1} key={weekday + weekDayIndex}>
                        <Field
                          name={`${name}.${index}.${weekday}`}
                          component={FormikSelectField}
                          placeholder="Day"
                          variant="standard"
                          options={weekDaysOptions}
                          // sx={{ minWidth: 100 }}
                        />
                        <FormikErrorMessage
                          name={`${name}.${index}.${weekday}`}
                        />
                      </Stack>
                    ))}
                  </Stack>
                  {/* production day & packaging day */}
                  <Stack direction="row" spacing={2} className="flexRow flex1">
                    {batch.sellDays.map((sellDay, sellDayIndex) => (
                      <Stack
                        spacing={1}
                        key={sellDay + sellDayIndex}
                        className="flex1"
                      >
                        <Field
                          name={`${name}.${index}.sellDays.${sellDayIndex}.days`}
                          component={FormikSelectField}
                          placeholder="Day"
                          variant="standard"
                          options={weekDaysOptions}
                          sx={{ minWidth: 100 }}
                          multiple
                          renderValue={renderWeekDaysLabels}
                        />
                        <FormikErrorMessage
                          name={`${name}.${index}.sellDays.${sellDayIndex}`}
                        />
                      </Stack>
                    ))}
                  </Stack>
                </div>
              ))}
            <Stack spacing={0}>
              <FormikErrorMessage name={name} />
            </Stack>
          </Stack>
        </div>
      )}
    </FieldArray>
  );
};

export default ProductionSchemaBatchesField;
