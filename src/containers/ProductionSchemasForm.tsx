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

import { productionSchemasSchema } from "../utils/validations/productionSchemas";
import ProductionSchemaBatchesField from "./ProductionSchemaBatchesField";
import {
  productionSchemaInitialValues,
  productionSchemasInitialValues
} from "../utils/productionSchemasUtils";

const FormikTextField = ({ field, ...props }) => (
  <TextField {...field} {...props} />
);

const StyledFormRow = styled("div")({
  borderRadius: 6,
  border: "1px solid #E6E6E6",
  background: "#FFF"
});

const StyledFormRowHeader = styled("div")({
  backgroundColor: "#F0F0F0",
  padding: 16
});

const StyledFormRowLabel = styled("div")({
  backgroundColor: "#F0F9FF"
});

const brands = ["FOODCHERI", "SEAZON", "SEAZON BE"];

const ProductionSchemasForm = () => {
  const formikRef = useRef();

  const handleConfirm = () => {
    // if (!formikRef.current) return;
    (formikRef.current as any)?.submitForm();
  };

  const handleCancel = () => console.log("cancel");

  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <div className="flexColumn stretchSelf flex1">
      <div className="flexRow justifyEnd stretchSelf">
        <Stack direction="row" spacing={2}>
          <Button onClick={handleCancel}>Annuler</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Enregister
          </Button>
        </Stack>
      </div>
      <Formik
        initialValues={productionSchemasInitialValues}
        onSubmit={handleSubmit}
        innerRef={formikRef}
        validationSchema={productionSchemasSchema}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form className="flexColumn stretchSelf flex1">
              <FieldArray name="productionSchemas">
                {({ remove, insert }) => (
                  <div className="flexColumn stretchSelf">
                    <Stack spacing={1} className="stretchSelf">
                      {values.productionSchemas.length &&
                        values.productionSchemas.map((_, index: number) => (
                          <StyledFormRow
                            key={index}
                            className="flexColumn justifyCenter"
                          >
                            <StyledFormRowHeader className="flexCenter stretchSelf">
                              <div>
                                {/* <Grid item xs={3}> */}
                                <Stack spacing={1}>
                                  <Field
                                    name={`productionSchemas.${index}.name`}
                                    component={FormikTextField}
                                    placeholder="Name"
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
                              </div>
                            </StyledFormRowHeader>
                            <StyledFormRowLabel className="flexRow stretchSelf">
                              <div className="flexCenter stretchSelf">
                                <Typography>Jour de production</Typography>
                              </div>
                              <div className="flexCenter stretchSelf">
                                <Typography>Jour de barquettage</Typography>
                              </div>
                              <div className="flexCenter flex1">
                                <Box
                                  sx={{ height: 48 }}
                                  className="flexCenter stretchSelf"
                                >
                                  <Typography>Jour de vente</Typography>
                                </Box>
                                <Box
                                  sx={{ height: 52 }}
                                  className="flexCenter stretchSelf"
                                >
                                  <div className="center flex1 flexRow justifyCenter stretchSelf">
                                    {brands.map((brand, index) => (
                                      <div className="flex1 flexCenter">
                                        {brand}
                                      </div>
                                    ))}
                                  </div>
                                </Box>
                              </div>
                            </StyledFormRowLabel>
                            <div>
                              <ProductionSchemaBatchesField
                                batches={
                                  values.productionSchemas[index].batches
                                }
                                parentIndex={index}
                                name={`productionSchemas.${index}.batches`}
                              />
                            </div>
                          </StyledFormRow>
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
                            productionSchemaInitialValues
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
