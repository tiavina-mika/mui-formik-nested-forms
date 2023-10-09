import * as Yup from "yup";

export const ReportOrderRDSchema = Yup.object().shape({
  products: Yup.array()
    .of(
      Yup.object().shape({
        quantity: Yup.number()
          .typeError("Quantité obligatoire")
          .required("Quantité obligatoire"),
        product: Yup.object().required("Produit obligatoire")
      })
    )
    .min(1, "Veuillez ajouter un produit")
});
