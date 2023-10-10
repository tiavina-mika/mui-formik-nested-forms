import React, { useRef } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import { Box, Button, Fab, Stack, TextField, styled } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { productionSchemasSchema } from "../utils/validations/productionSchemas";
import ProductionSchemaBatchesField from "./ProductionSchemaBatchesField";
import {
  PRODUCTION_SCHEMA_BORDER_COLOR,
  getProductionSchemasInitialValues,
  productionSchemaInitialValues
} from "../utils/productionSchemasUtils";
import FormikErrorMessage from "../components/FormikErrorMessage";
import ProductionSchemasFormHeader from "./ProductionSchemasFormHeader";
import { productionSchemas } from "../utils/data/productionSchema";

const FormikTextField = ({ field, ...props }) => (
  <TextField {...field} {...props} />
);

const StyledFormRow = styled("div")({
  borderRadius: 6,
  border: "1px solid " + PRODUCTION_SCHEMA_BORDER_COLOR,
  background: "#FFF"
});

const StyledFormRowHeader = styled("div")({
  backgroundColor: "#F0F0F0",
  padding: 16
});

const ProductionSchemasForm = () => {
  const formikRef = useRef();

  const handleConfirm = () => {
    (formikRef.current as any)?.submitForm();
  };

  const handleCancel = () => console.log("cancel");

  const handleSubmit = (values: any) => {
    console.log("values", values);
    // console.log("values", JSON.stringify(values));
  };

  return (
    <Stack className="flexColumn stretchSelf flex1" spacing={2}>
      <div className="flexRow justifyEnd stretchSelf">
        <Stack direction="row" spacing={2}>
          <Button onClick={handleCancel}>Annuler</Button>
          <Button variant="contained" onClick={handleConfirm}>
            Enregister
          </Button>
        </Stack>
      </div>
      <Formik
        initialValues={getProductionSchemasInitialValues()}
        onSubmit={handleSubmit}
        innerRef={formikRef}
        validationSchema={productionSchemasSchema}
      >
        {({ values }) => {
          return (
            <Form className="flexColumn stretchSelf flex1">
              <FieldArray name="productionSchemas">
                {({ remove, insert }) => (
                  <div className="flexColumn stretchSelf">
                    <Stack spacing={3} className="stretchSelf">
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
                                    sx={{ minWidth: 240 }}
                                  />
                                  <FormikErrorMessage
                                    name={`productionSchemas.${index}.name`}
                                  />
                                </Stack>
                              </div>
                            </StyledFormRowHeader>
                            <ProductionSchemasFormHeader />
                            <div className="stretchSelf">
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
                      <div>
                        <FormikErrorMessage name="productionSchemas" />
                      </div>
                    </Stack>
                    {/* add icon */}
                    <Box sx={{ position: "fixed", left: 20, bottom: 20 }}>
                      <Fab
                        color="primary"
                        onClick={() =>
                          insert(
                            values.productionSchemas.length,
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
    </Stack>
  );
};

export default ProductionSchemasForm;
