const object = {
  name : 'Figo',
  age : 21,
  coords: {
    lat: 0,
    lng: 0
  },
  //function decralation inside object
  // setAg(age: number): void {
  //   this.age = age
  // }
}

const { age} : { age: number} = object
console.log(age)

const {
  coords : { lat, lng}
}: {coords: {lat : number; lng: number}} = object