import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Box, Fab, FormHelperText, Stack, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { IProductSchemasFormValues } from "../types/productionSchemas.type";

const FormikTextField = ({ field, ...props }) => (
  <TextField {...field} {...props} />
);

const fieldInitialEmptyValues = {
  name: ""
};
const initialValues: IProductSchemasFormValues = {
  productionSchemas: [fieldInitialEmptyValues]
};

const ProductionSchemasForm = () => {
  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <div className="stretchSelf flex1">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={ReportOrderRDSchema}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <FieldArray name="productionSchemas">
                {({ remove, insert }) => (
                  <div>
                    <Stack spacing={1}>
                      {values.productionSchemas.length &&
                        values.productionSchemas.map((_, index: number) => (
                          <div key={index}>
                            {/* <Grid item xs={3}> */}
                            <Stack spacing={1}>
                              <Field
                                name={`productionSchemas.${index}.name`}
                                component={FormikTextField}
                                label="Name"
                                variant="standard"
                              />
                              <ErrorMessage
                                name={`productionSchemas.${index}.name`}
                                render={(message: string) => (
                                  <FormHelperText error>
                                    {message}
                                  </FormHelperText>
                                )}
                              />
                            </Stack>
                            {/* </Grid>
                                <Grid item xs={1} sx={{ position: "relative" }}>
                                  <IconButton
                                    type="button"
                                    onClick={() => remove(index)}
                                    sx={{ position: "absolute", bottom: 0 }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Grid>
                              </Grid> */}
                          </div>
                        ))}
                      <Stack spacing={0}>
                        <ErrorMessage
                          name="productionSchemas"
                          render={(message: string) => {
                            if (typeof message !== "string") return;
                            return (
                              <FormHelperText error>{message}</FormHelperText>
                            );
                          }}
                        />
                      </Stack>
                    </Stack>
                    {/* add icon */}
                    <Box sx={{ position: "fixed", left: 20, bottom: 20 }}>
                      <Fab
                        color="primary"
                        onClick={() =>
                          insert(
                            values.productionSchemas.length - 1,
                            fieldInitialEmptyValues
                          )
                        }
                      >
                        <AddIcon />
                      </Fab>
                    </Box>
                  </div>
                )}
              </FieldArray>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductionSchemasForm;
