const cars: string[] = ['ford', 'suzuki']
const carMaker: string[][] = [
  ['mustang'],
  ['ignis']
]


//help with inference when extracing values
const car = cars[0]
const myCar = cars.pop()


//prevent  incompatible values
// cars.push(100);

//help with 'map'
cars.map((car: string): string =>{
  return car
})

//flexible types
const importantDates: (Date | string)[] = [new Date(), '2012-10-10']
importantDates.push('2030-10-12')
