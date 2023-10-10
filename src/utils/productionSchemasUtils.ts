import { IProductSchemas } from "../types/productionSchemas.type";
import { productionSchemas } from "./data/productionSchema";

export const PRODUCTION_SCHEMA_BORDER_COLOR = "#E6E6E6";

export const daysOptions = [
  {
    label: "Lundi",
    value: "1"
  },
  {
    label: "Mardi",
    value: "2"
  },
  {
    label: "Mercredi",
    value: "3"
  },
  {
    label: "Jeudi",
    value: "4"
  },
  {
    label: "Vendredi",
    value: "5"
  },
  {
    label: "Samedi",
    value: "6"
  },
  {
    label: "Dimanche",
    value: "7"
  }
];

const daysWithoutSunday = daysOptions.slice(0, daysOptions.length - 1);

export const weekDaysOptions = [
  {
    label: "Mercredi-1",
    value: "3-1"
  },
  {
    label: "Jeudi-1",
    value: "4-1"
  },
  {
    label: "Vendredi-1",
    value: "5-1"
  },
  {
    label: "Lundi-1",
    value: "1-1"
  },
  {
    label: "Dimanche-1",
    value: "7-1"
  },
  ...daysWithoutSunday
];

export const productionSchemaBatchInitialValues = {
  productionDay: "2",
  packagingDay: "3",
  sellDays: [
    {
      brand: "FOODCHERI",
      days: ["2", "3"]
    },
    {
      brand: "SEAZON",
      days: []
    },
    {
      brand: "SEAZON_BE",
      days: []
    }
  ]
};

export const renderWeekDaysLabels = (dayNumbers: string[]): string => {
  const days = weekDaysOptions.filter((option) =>
    dayNumbers.includes(option.value)
  );
  const label = days.map((day) => day.label).join(", ");
  return label;
};

export const productionSchemaInitialValues = {
  name: "Nom du schéma de production",
  batches: [productionSchemaBatchInitialValues],
  isNew: true // if it's a creation
};

export const productionSchemasEmptyInitialValues = {
  productionSchemas: [productionSchemaInitialValues]
};

export const productionSchemasExistingInitialValues = {
  productionSchemas
};

export const getProductionSchemasInitialValues = (
  productionSchemas?: IProductSchemas
) => {
  if (productionSchemas?.length) {
    return {
      productionSchemas
    };
  }

  return productionSchemasEmptyInitialValues;
};
