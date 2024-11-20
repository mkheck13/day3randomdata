

// We will pull the data from the json file and randomly select a student
// Create a fuction that then will randomize a selection from that data
// On a button click we will display the data onto the DOM

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let house = document.getElementById('house');
let summonWizard = document.getElementById('summonWizard');



// Create a function that will pull the data from the JSON file

// .then() is a promise that will wait for hte data to be returned
// promise can be accepted or rejected
function getStudentData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.students;
    })
}
getStudentData();

// Create a function that will randomize the selection of a student
function getRandomStudent(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}

// Create afunction that will display data onto the DOM
summonWizard.addEventListener('click', (event) => {
    getStudentData().then( students => {
        let randomStudent = getRandomStudent(students);
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        house.innerText = randomStudent.house;
    })
});