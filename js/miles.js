
//Car class
function Car(mpg, inTank) {
  //inTank is gallons in a tank
  this.mpg = mpg;
  this.gallons = inTank;
}

//Route class
function Route(miles, name, location) {
  //location is city and state
  this.distance = miles;
  this.name = name;
  this.loc = location;
}

//whether car can make the drive
function isInRange(carObj, routeObj) {
  if (carObj.mpg * carObj.gallons >= routeObj.distance)
    return true;
  else
    return false;
}

//instances of Car
 var prius = new Car(48, 12);
 var f150 = new Car(24, 23);

 //instances of Route
 var vegas = new Route(749, 'Vegas', 'Las Vegas, NV');
 var albq = new Route(447, 'Albuquerque', 'Albuquerque, NM');

//show results
console.log(isInRange(prius, vegas));
console.log(isInRange(prius, albq));
console.log(isInRange(f150, vegas));
console.log(isInRange(f150, albq));
