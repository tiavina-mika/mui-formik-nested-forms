import * as Yup from "yup";

const sellDaysSchema = Yup.array().of(
  Yup.object().shape({
    brand: Yup.string(),
    days: Yup.array().of(Yup.string())
  })
);

const batchSchema = Yup.object().shape({
  productionDay: Yup.string().required("Production day required"),
  packagingDay: Yup.string().required("Packaging day required"),
  sellDays: sellDaysSchema
});

export const productionSchemasSchema = Yup.object().shape({
  productionSchemas: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Name required"),
        batches: Yup.array().of(batchSchema)
      })
    )
    .required("Empty production schemas") // these constraints are shown if and only if inner constraints are satisfied
  // .min(2, 'Minimum of 1 production schemas'),
});
