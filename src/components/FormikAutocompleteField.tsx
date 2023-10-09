import React, { useState, ChangeEvent } from "react";

import { Field } from "formik";
import {
  Autocomplete,
  CircularProgress,
  styled,
  TextField
} from "@mui/material";
import { debounce } from "lodash";
import { IAutoCompleteOption } from "../types/util.type";

const autocompleteSx = {
  textField: {
    "& .MuiInput-input": {
      cursor: "pointer"
    }
  }
};

export const StyledAutocompleteTextField = styled(TextField)({
  "& .MuiAutocomplete-inputRoot.MuiInputBase-root": {
    "&:before": {
      borderBottom: "none",
      "&:hover": {
        borderBottom: "none"
      }
    },
    "& .MuiAutocomplete-input": {
      padding: 4
    }
  },
  "& .MuiInput-input": {
    fontWeight: 600,
    fontSize: 14,
    color: "#414141"
  }
});

const FormikAutocomplete = ({
  form,
  loading,
  label,
  field,
  readOnly = false,
  ...props
}) => {
  const { value } = field;
  const { handleChange } = form;

  return (
    <Autocomplete
      {...props}
      sx={{ flex: 1, pointer: "cursor" }}
      options={props.options}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          fullWidth
          label={label}
          sx={readOnly ? autocompleteSx.textField : null}
          onChange={handleChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
        />
      )}
    />
  );
};

type Props = {
  name: string;
  label: string;
  setFieldValue: any;
  options: IAutoCompleteOption[];
  getOptionLabel: (value: Record<string, any>) => string;
  onSearch: (value: string) => void;
};

const FormikAutocompleteField = ({
  setFieldValue,
  name,
  label,
  options,
  getOptionLabel, // { value (ex: objectId), data (parse object json)}
  onSearch
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (_: ChangeEvent<HTMLElement>, newValue) => {
    setFieldValue(name, newValue.data);
  };

  const handleInputChange = debounce(
    async (event: ChangeEvent<HTMLElement>, newValue) => {
      if (newValue && event?.type === "change") {
        setLoading(true);
        await onSearch(newValue);
        setLoading(false);
      }
    },
    500
  );

  return (
    <Field
      name={name}
      label={label}
      loading={loading}
      component={FormikAutocomplete}
      options={options}
      isOptionEqualToValue={(option, value) =>
        value && option.value === value.objectId
      }
      getOptionLabel={(option) => getOptionLabel(option.data || option)}
      onChange={handleChange}
      onInputChange={handleInputChange}
      disableClearable
    />
  );
};

export default FormikAutocompleteField;
