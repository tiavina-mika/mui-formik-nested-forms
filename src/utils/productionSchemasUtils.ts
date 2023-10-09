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
  }
];

export const productionSchemaBatchInitialValues = {
  productionDay: "2",
  packagingDay: "3"
};

export const productionSchemaInitialValues = {
  name: "Nom du schéma de production",
  batches: [productionSchemaBatchInitialValues]
};
