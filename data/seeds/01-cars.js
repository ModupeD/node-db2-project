// STRETCH
const cars = [
{
 vin: '11111111111111',
 make: 'toyota',
 model: 'prius',
 mileage: 215000,
 title: 'clean',
 transmission: 'manual',
},
{
    vin: '11111111111111',
    make: 'totyota',
    model: 'corolla',
    mileage: 115000,
    title: 'salvage',
   },
   {
    vin: '11111111111111',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
    title: 'clean',
    
   },
]

exports.seed = async function(knex) {
   
    await knex('cars').truncate()
    await knex('cars').insert(cars)
    
}