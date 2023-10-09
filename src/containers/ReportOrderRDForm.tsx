import React, { forwardRef, useState } from "react";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  FormikProps
} from "formik";
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { IProductFormValues } from "../types/product.type";
import { ReportOrderRDSchema } from "../utils/validations/ordersvalidations";
import FormikAutocompleteField from "../components/FormikAutocompleteField";
import { searchRecipesAutocomplete } from "../utils/utils";
import { IAutoCompleteOption } from "../types/util.type";
import { IRecipe } from "../types/recipe.type";

const FormikTextField = ({ field, ...props }) => (
  <TextField {...field} {...props} />
);

const initialValues: IProductFormValues = {
  products: []
};

const getOptionLabel = (recipe: IRecipe): string => {
  const name = recipe.name.toLowerCase();
  const label = recipe.uniqueCode ? recipe.uniqueCode + " - " + name : name;
  return label;
};

const formatOptions = (recipes: IRecipe[]): IAutoCompleteOption<IRecipe>[] => {
  return recipes.map(
    (recipe: IRecipe): IAutoCompleteOption<IRecipe> => ({
      value: recipe.objectId,
      data: recipe
    })
  );
};

type Props = {
  onSubmit: (values: IProductFormValues) => void;
};
const ReportOrderRDForm = forwardRef<FormikProps<IProductFormValues>, Props>(
  ({ onSubmit }, ref) => {
    const [searchedRecipes, setSearchedRecipes] = useState<IRecipe[]>([]);

    const handleSearchRecipes = async (search: string) => {
      const recipes = await searchRecipesAutocomplete(search);

      setSearchedRecipes(recipes);
    };

    return (
      <Formik
        initialValues={initialValues}
        innerRef={ref}
        onSubmit={onSubmit}
        validationSchema={ReportOrderRDSchema}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <FieldArray name="products">
                {({ remove, push }) => (
                  <Stack spacing={1}>
                    {values.products.length > 0 &&
                      values.products.map((_, index: number) => (
                        <div key={index}>
                          <Grid container spacing={4}>
                            <Grid item xs={8}>
                              <Stack spacing={1}>
                                <FormikAutocompleteField
                                  name={`products.${index}.product`}
                                  label="Produit"
                                  setFieldValue={setFieldValue}
                                  options={formatOptions(searchedRecipes)}
                                  getOptionLabel={getOptionLabel}
                                  onSearch={handleSearchRecipes}
                                />
                                <ErrorMessage
                                  name={`products.${index}.product`}
                                  render={(message: string) => (
                                    <FormHelperText error>
                                      {message}
                                    </FormHelperText>
                                  )}
                                />
                              </Stack>
                            </Grid>
                            <Grid item xs={3}>
                              <Stack spacing={1}>
                                <Field
                                  name={`products.${index}.quantity`}
                                  component={FormikTextField}
                                  label="Quantité"
                                  type="number"
                                  variant="standard"
                                />
                                <ErrorMessage
                                  name={`products.${index}.quantity`}
                                  render={(message: string) => (
                                    <FormHelperText error>
                                      {message}
                                    </FormHelperText>
                                  )}
                                />
                              </Stack>
                            </Grid>
                            <Grid item xs={1} sx={{ position: "relative" }}>
                              <IconButton
                                type="button"
                                onClick={() => remove(index)}
                                sx={{ position: "absolute", bottom: 0 }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </div>
                      ))}
                    <Stack spacing={0}>
                      <ErrorMessage
                        name={`products`}
                        render={(message: string) => {
                          if (typeof message !== "string") return;
                          return (
                            <FormHelperText error>{message}</FormHelperText>
                          );
                        }}
                      />
                      <div>
                        <Button
                          onClick={() => {
                            push({ product: null, quantity: null });
                          }}
                          variant="text"
                          startIcon={<AddIcon />}
                          sx={{ textTransform: "initial" }}
                        >
                          Ajouter un produit
                        </Button>
                      </div>
                    </Stack>
                  </Stack>
                )}
              </FieldArray>
            </Form>
          );
        }}
      </Formik>
    );
  }
);

export default ReportOrderRDForm;
