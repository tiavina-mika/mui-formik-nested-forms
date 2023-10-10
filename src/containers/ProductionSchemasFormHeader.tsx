import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { PRODUCTION_SCHEMA_BORDER_COLOR } from "../utils/productionSchemasUtils";

const border = "1px solid " + PRODUCTION_SCHEMA_BORDER_COLOR;

const StyledFormRowLabel = styled("div")({
  backgroundColor: "#F0F9FF",
  borderTop: border,
  borderBottom: border
});

const brands = ["FOODCHERI", "SEAZON", "SEAZON BE"];

const ProductionSchemasFormHeader = () => {
  return (
    <StyledFormRowLabel className="flexRow stretchSelf">
      {/* empty first row */}
      <Box sx={{ width: 46 }} />
      {/* 2nd row */}
      <div className="flexRow center stretchSelf flex1">
        <Typography>Jour de production</Typography>
      </div>
      {/* 3nd row */}
      <Box
        sx={{ borderLeft: border }}
        className="flexRow center stretchSelf flex1"
      >
        <Typography>Jour de barquettage</Typography>
      </Box>
      {/* last row divide to 3 rows (brands) */}
      <Box className="flexCenter" sx={{ flex: 3 }}>
        {/* top: label */}
        <Box
          sx={{ height: 48, borderLeft: border, borderBottom: border }}
          className="flexCenter stretchSelf"
        >
          <Typography>Jour de vente</Typography>
        </Box>
        {/* bottom: fields */}
        <Box sx={{ height: 52 }} className="flexCenter stretchSelf">
          <div className="center flex1 flexRow justifyCenter stretchSelf">
            {brands.map((brand, index) => (
              <Box
                sx={{ borderLeft: border }}
                className="flex1 flexRow justifyCenter center stretchSelf"
                key={brand + index}
              >
                {brand}
              </Box>
            ))}
          </div>
        </Box>
      </Box>
      {/* empty right col */}
      <Box sx={{ width: 46 }} className="flexCenter stretchSelf">
        {/* mock the top */}
        <div className="flex1" />
        <Box sx={{ height: 52, borderTop: border }} className="stretchSelf" />
      </Box>
    </StyledFormRowLabel>
  );
};

export default ProductionSchemasFormHeader;
