import Button from "@mui/material/Button";
import { useState } from "react";
import ReportOrderRDDialog from "./containers/ReportOrderRDDialog";

const App = () => {
  const [openOrderReportRDDialog, setOpenOrderReportRDDialog] = useState<
    boolean
  >(false);

  const toggleOrderReportRDDialog = () =>
    setOpenOrderReportRDDialog(!openOrderReportRDDialog);

  return (
    <div className="flexCenter minHeight100">
      <Button variant="contained" onClick={toggleOrderReportRDDialog}>
        Générer un rapport de commande R&D
      </Button>
      <ReportOrderRDDialog
        open={openOrderReportRDDialog}
        onClose={toggleOrderReportRDDialog}
      />
    </div>
  );
};

export default App;
