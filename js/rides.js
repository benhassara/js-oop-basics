
//Child Class
function Child(name, age, height) {
  this.name = name;
  this.age = age;
  //height in inches
  this.height = height;
}

//Child class methods
Child.prototype.isEligible = function(rideObj) {
  //determine whether child is eligible to go on ride
  if (this.height >= rideObj.minHeight && this.height <=rideObj.maxHeight)
    return true;
  else
    return false;
};

//Ride Class
function Ride(minHeight, maxHeight) {
  //height in inches
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
}

//instances of Child
var melvin = new Child('Melvin', 14, 70);
var stacy = new Child('Stacy', 6, 40);

//instances of Ride
var pukePusher = new Ride(60, 100);
var kiddieCoaster = new Ride(30, 66);

//print isEligible results
console.log(melvin.isEligible(pukePusher));
console.log(melvin.isEligible(kiddieCoaster));
console.log(stacy.isEligible(pukePusher));
console.log(stacy.isEligible(kiddieCoaster));
