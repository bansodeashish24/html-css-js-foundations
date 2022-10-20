// lastIndexOf()

const statement = "John Smith lives in India. John is 30 years old.";
// console.log(statement.lastIndexOf("John"));

// slice
const surName = statement.slice(5, -2);
// console.log(surName);

const statementCopy = statement.slice();
// console.log(statementCopy);

/*
    Arrays
*/

// join()
const urlArray = ["https://", "google", ".", "com"];
const URL = urlArray.join("");
// console.log(URL);
// const protocol = URL.split(":");
// console.log(protocol[0]);

// https://google.com/home

//push()
urlArray.push("/home/");
urlArray.push(1234);
urlArray.pop();
urlArray.pop();
// console.log(urlArray);

urlArray.unshift("pre-string");
urlArray.unshift("pre-pre-string");
urlArray.shift();
urlArray.shift();
// console.log(urlArray);

// splice()
// const urlArray = ["https://","google", ".", "com"];
urlArray.splice(1, 0, "www.");
// urlArray.splice(2, 2, "facebook");
// console.log(urlArray);

// slice()
const urlElements = urlArray.slice();
// console.log(urlElements);

const statement1 = ["India", "is", "my"];
const statement2 = ["Country"];
const fullStatement = statement1.concat(statement2);
const fullStatement1 = [...statement1, ...statement2]; // spread syntax
// console.log(fullStatement1);

// console.log(urlArray);
// urlArray.reverse();
// console.log(urlArray);

// loops
// const urlArray = ["https://","google", ".", "com"];
for (let i = 0; i < urlArray.length; i++) {
    // console.log(urlArray[i]);
}

// for of
for (const element of urlArray) {
    // console.log(element);
}

// for in
for (const index in urlArray) {
    // console.log(index);
}

// forEach
urlArray.forEach((element, index) => {
    // console.log(element, index);
});

/*
    JSON - JavaScript Object Notation
*/

const employee = {
    firstName: "Amar",
    lastName: "Singh",
    employeeCode: 12345,
    permanentAddress: {
        firstLine: "",
        secondLine: "",
        pinCode: 411042,
    },
    addresses: [
        {
            firstLine: "",
            secondLine: "",
            pinCode: 411042,
        },
        {
            firstLine: "",
            secondLine: "",
            pinCode: 411042,
        },
    ],
    phoneNumbers: ["9999333344", "8888555777"],
};

// console.log(employee.permanentAddress.pinCode);
// console.log(employee.addresses[1]);

const stringEmployee = JSON.stringify(employee);
// console.log(typeof stringEmployee);
const employeeObject = JSON.parse(stringEmployee);
// console.log(typeof employeeObject);

for (const key in employee) {
    // console.log(key);
    // console.log(employee[key]);
}

const keys = Object.keys(employee);
// console.log(keys);

const keyName = "firstName";
// console.log(employee.firstName);
// console.log(employee[keyName]);
