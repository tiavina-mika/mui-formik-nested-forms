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
const ProductionSchemaBatchesField = ({
  name,
  batches,
  parentIndex
}: Props) => {
  return (
    <FieldArray name={name}>
      {({ remove, push }) => (
        <div className="flexColumn stretchSelf">
          {batches.length && (
            <Stack spacing={1} className="stretchSelf">
              {batches.map((batch, index: number) => (
                // row
                <div key={parentIndex + index} className="flexRow center">
                  {/* --------- left --------- */}
                  <Box sx={{ width: 46 }} className="flexCenter">
                    <IconButton
                      onClick={() => {
                        push(productionSchemaBatchInitialValues);
                      }}
                      color="primary"
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  {/* --------- center --------- */}
                  <Stack direction="row" spacing={2} className="flex1">
                    {/* production day & packaging day (2 first fields) */}
                    {weekDays.map((weekday, weekDayIndex) => (
                      <Stack
                        spacing={1}
                        key={weekday + weekDayIndex}
                        className="flex1"
                      >
                        <Field
                          name={`${name}.${index}.${weekday}`}
                          component={FormikSelectField}
                          placeholder="Day"
                          variant="standard"
                          options={weekDaysOptions}
                        />
                        <FormikErrorMessage
                          name={`${name}.${index}.${weekday}`}
                        />
                      </Stack>
                    ))}

                    {/* sell day by brand (3 last fields) */}
                    {batch.sellDays.map((sellDay, sellDayIndex) => (
                      <Stack
                        spacing={1}
                        key={sellDay + sellDayIndex}
                        className="flexColumn flex1"
                      >
                        <Field
                          name={`${name}.${index}.sellDays.${sellDayIndex}.days`}
                          component={FormikSelectField}
                          placeholder="Day"
                          variant="standard"
                          options={weekDaysOptions}
                          multiple
                          renderValue={renderWeekDaysLabels}
                          className="stretchSelf flex1"
                        />
                        <FormikErrorMessage
                          name={`${name}.${index}.sellDays.${sellDayIndex}`}
                        />
                      </Stack>
                    ))}
                  </Stack>
                  {/* --------- right --------- */}
                  <Box sx={{ width: 46 }} className="flexCenter">
                    <IconButton onClick={() => remove(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </div>
              ))}
              <Stack spacing={0}>
                <FormikErrorMessage name={name} />
              </Stack>
            </Stack>
          )}
        </div>
      )}
    </FieldArray>
  );
};

export default ProductionSchemaBatchesField;
