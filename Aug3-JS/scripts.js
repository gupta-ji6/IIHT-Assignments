particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
var person = {
    fName: "Ayush",
    lName: "Gupta",
    email: "ayushgupta197@gmail.com",
    contact: 7877791648,
    employeeID: 805618
}
window.onload = function() {
    document.getElementById('car').style.display = 'none';
    document.getElementById('emp').style.display = 'none';
  };
function showEmployee() {
    document.getElementById('emp').style.display = 'block';
    document.getElementById("fName").innerHTML = person.fName;
    document.getElementById("lName").innerHTML = person.lName;
    document.getElementById("email").innerHTML = person.email;
    document.getElementById("contact").innerHTML = person.contact;
    document.getElementById("employeeID").innerHTML = person.employeeID;
}

var car = {
    brand: "Hyundai",
    model: "i10",
    fuel: "Petrol",
    mileage: "16KMPL"
}
function showCar() {
    document.getElementById('car').style.display = 'block';
    document.getElementById("brand").innerHTML = car.brand;
    document.getElementById("model").innerHTML = car.model;
    document.getElementById("fuel").innerHTML = car.fuel;
    document.getElementById("mileage").innerHTML = car.mileage;
    
}

console.log(person);
console.log(car);


