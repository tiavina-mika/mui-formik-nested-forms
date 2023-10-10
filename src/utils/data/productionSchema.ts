export const productionSchemas = [
  {
    objectId: "01",
    name: "Nom du schéma de production",
    batches: [
      {
        productionDay: "4-1",
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
      }
    ]
  },
  {
    objectId: "02",
    name: "Nom du schéma de production",
    batches: [
      {
        productionDay: "3",
        packagingDay: "2",
        sellDays: [
          {
            brand: "FOODCHERI",
            days: ["2", "3", "7-1", "1-1", "5-1"]
          },
          {
            brand: "SEAZON",
            days: ["1"]
          },
          {
            brand: "SEAZON_BE",
            days: []
          }
        ]
      },
      {
        productionDay: "5",
        packagingDay: "5",
        sellDays: [
          {
            brand: "FOODCHERI",
            days: ["5"]
          },
          {
            brand: "SEAZON",
            days: ["5"]
          },
          {
            brand: "SEAZON_BE",
            days: ["5"]
          }
        ]
      }
    ]
  }
];
