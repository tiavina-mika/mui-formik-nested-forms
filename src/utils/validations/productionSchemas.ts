import * as Yup from "yup";

const batchSchema = Yup.object().shape({
  productionDay: Yup.string().required("Production day required")
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
