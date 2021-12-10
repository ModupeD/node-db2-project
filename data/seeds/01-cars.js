// STRETCH
const cars = [
  {
    vin: "5NPEC4ABXDH539433",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "WDBNG75J32A225892",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "4T1BB3EK3AU115504",
    make: "ford",
    model: "focus",
    mileage: 15000,
    title: "clean",
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
