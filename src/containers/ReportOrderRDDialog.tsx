import React, { useRef } from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  styled,
  Box
} from "@mui/material";
import { FormikProps } from "formik";

import { IProductFormValues } from "../types/product.type";
import ReportOrderRDForm from "./ReportOrderRDForm";

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: 8,
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15)",
    padding: 8,
    maxWidth: 664
  }
});

type Props = {
  onClose: () => void;
  open: boolean;
};
export const ReportOrderRDDialog = ({ onClose, open }: Props) => {
  const formikRef = useRef<FormikProps<IProductFormValues>>(null);

  const handleConfirm = () => {
    formikRef.current.submitForm();

    // not close the dialog if empty product or any arror
    const products = formikRef.current.values.products;
    if (formikRef.current.errors.products?.length || !products.length) return;
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSubmitOrderReport = (values: IProductFormValues) => {
    console.log("values", values);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Générer un rapport de commande R&D
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ajouter les produits pour lesquels vous souhaitez générer un rapport
          de commande R&D, ainsi que la quantité associé à chaque produit.
        </DialogContentText>
        <Box sx={{ mt: 4 }}>
          <ReportOrderRDForm
            ref={formikRef}
            onSubmit={handleSubmitOrderReport}
          />
        </Box>
      </DialogContent>
      <DialogActions className="flexRow spaceBetween">
        <Button onClick={handleCancel} color="primary">
          Annuler
        </Button>
        <Button onClick={handleConfirm} color="primary" variant="contained">
          Générer
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ReportOrderRDDialog;
