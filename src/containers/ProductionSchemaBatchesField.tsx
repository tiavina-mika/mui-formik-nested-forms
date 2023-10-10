import React from "react";
import { Field, ErrorMessage, FieldArray } from "formik";
import {
  FormHelperText,
  IconButton,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  productionSchemaBatchInitialValues,
  renderWeekDaysLabels,
  weekDaysOptions
} from "../utils/productionSchemasUtils";

const FormikTextField = ({ options = [], field, ...props }) => (
  <TextField {...field} {...props} />
);

// const FormikSelectField = ({ options, ...props }) => {
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
                          sx={{ minWidth: 100 }}
                        />
                        <ErrorMessage
                          name={`${name}.${index}.${weekday}`}
                          render={(message: string) => (
                            <FormHelperText error>{message}</FormHelperText>
                          )}
                        />
                      </Stack>
                    ))}

                    {/* production day & packaging day */}
                    <Stack direction="row" spacing={2}>
                      {batch.sellDays.map((sellDay, sellDayIndex) => (
                        <Stack spacing={1} key={sellDay + sellDayIndex}>
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
                          <ErrorMessage
                            name={`${name}.${index}.sellDays.${sellDayIndex}`}
                            render={(message: string) => (
                              <FormHelperText error>{message}</FormHelperText>
                            )}
                          />
                        </Stack>
                      ))}
                    </Stack>
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
