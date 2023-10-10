import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledFormRowLabel = styled("div")({
  backgroundColor: "#F0F9FF"
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
      <div className="flexRow center stretchSelf flex1">
        <Typography>Jour de barquettage</Typography>
      </div>
      {/* last row divide to 3 rows (brands) */}
      <Box className="flexCenter" sx={{ flex: 3 }}>
        {/* top: label */}
        <Box sx={{ height: 48 }} className="flexCenter stretchSelf">
          <Typography>Jour de vente</Typography>
        </Box>
        {/* bottom: fields */}
        <Box sx={{ height: 52 }} className="flexCenter stretchSelf">
          <div className="center flex1 flexRow justifyCenter stretchSelf">
            {brands.map((brand, index) => (
              <div className="flex1 flexCenter" key={brand + index}>
                {brand}
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </StyledFormRowLabel>
  );
};

export default ProductionSchemasFormHeader;
