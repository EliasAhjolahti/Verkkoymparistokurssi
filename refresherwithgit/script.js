function calculateArea(radius){
    const PI = 3.14
    const area = PI * radius * radius
}

function compareNumbers(a,b){
    if(a > b){
        console.log(`${a} is greater than ${b}`);
    }
    else if(a < b){
        console.log(`${b} is greater than ${a}`);
    }
    else{
        console.log(`${a} and ${b} are equal`);
    }
}


calculateArea(3);

compareNumbers(1,2);
compareNumbers(2,1);
compareNumbers(1,1);


const numbers = [1,2,3,4,5];

const multipliedNumbers = numbers.map(num => num * 2);
console.log("Numbers multiplied by 2:", multipliedNumbers);

const filteredNumbers = numbers.filter(num => num > 2);
console.log("Numbers greater than 2: ", filteredNumbers);


class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo(){
        return `${this.make} ${this.model} ${this.year}`
    }
}

const car1 = new Car("Ford", "Fiesta", "2018")

console.log(car1.getCarInfo());


const user = {
    nimi: 'Erkki',
    email: "Erkki@esimerkki.com",
    address: {
        street: "Ahventie",
        city: "Vaasa"
    }
};

const{nimi, email, address: {street,city}} = user;
console.log(`${nimi}`);
console.log(`${email}`);
console.log(`${street}, ${city}`);

const updatedUser = {...user, email: "Erkki.Forselius@emaili.com"}
console.log(updatedUser);








const inputField = document.getElementById("userInput");
const displayButton = document.getElementById("displayButton");
const outputDiv = document.getElementById("output");

displayButton.addEventListener("click", () => {
    const userInput = inputField.value;

    outputDiv.textContent = `${userInput}`
}
)