
let sname = document.getElementById("nameInput");
let sage = document.getElementById("ageInput");
let ssub  = document.getElementById("subjectInput");


let studentName = document.getElementById("studentName");
let studentAge = document.getElementById("studentAge");
let studentSubject = document.getElementById("studentSubject");


function createProfile(){

    //alert(sname.value + " " + sage.value + " " + ssub.value);

    studentName.innerText = "Name: " + sname.value;
    studentAge.innerText = "Age: " + sage.value;
    studentSubject.innerText = "Subject: " + ssub.value;



}