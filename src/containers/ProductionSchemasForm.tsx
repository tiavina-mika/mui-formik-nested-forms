import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import {
  Box,
  Button,
  Fab,
  FormHelperText,
  Stack,
  TextField,
  styled
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { IProductSchemasFormValues } from "../types/productionSchemas.type";
import { productionSchemasSchema } from "../utils/validations/productionSchemas";

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

const fieldInitialEmptyValues = {
  name: "Nom du schéma de production"
};
const initialValues: IProductSchemasFormValues = {
  productionSchemas: [fieldInitialEmptyValues]
};

const ProductionSchemasForm = () => {
  const formikRef = useRef();

  const handleConfirm = () => {
    // if (!formikRef.current) return;
    console.log("handleConfirm");

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
        initialValues={initialValues}
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
                            className="flexRow justifyCenter"
                          >
                            <StyledFormRowHeader className="flexCenter flex1">
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
