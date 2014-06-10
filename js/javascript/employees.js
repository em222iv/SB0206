/**
 * Created by erikmagnusson on 2014-06-10.
 */
var employees = {
    employeeArray : []
}

function employed() {

    var person1 = {
        Name:"Stefan Snyting"
    };
    var person2 = {
        Name:"Michaelaaaaa"
    };


    employees.employeeArray[0] = person1;
    employees.employeeArray[1] = person2;

    appendEmplyees();
}
function appendEmplyees() {
    var weekDiv = document.getElementById('edit-monday1');

    weekDiv.innerHTML = employees.employeeArray.toString();

}

window.onload = employed();