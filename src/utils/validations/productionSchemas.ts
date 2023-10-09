import * as Yup from "yup";

export const productionSchemasSchema = Yup.object().shape({
  productionSchemas: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Name required") // these constraints take precedence
      })
    )
    .required("Empty production schemas") // these constraints are shown if and only if inner constraints are satisfied
  // .min(2, 'Minimum of 1 production schemas'),
});
