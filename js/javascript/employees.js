/**
 * Created by erikmagnusson on 2014-06-10.
 */
var employees = {
    employeeArray : [],
    workingArraysArray : [],
    e : null,
    aTagArray : []
}

function employed() {
    employees.employeeArray[0] = "Stefan Snyting";
    employees.employeeArray[1] = "Michaela Gladersson";
    employees.employeeArray[2] = "Alfonso Blomma";
    employees.employeeArray[3] = "Malin Vikings";
    employees.employeeArray[4] = "Ers majestät";
    employees.employeeArray[5] = "Hermione Telefongluttare";

    appendEmplyees();
}
function appendEmplyees() {
    var weekDiv = document.getElementById('edit-monday1add');
    var aTagCounter = 0;
    employees.employeeArray.forEach(function(employee) {
        aTagCounter++;
        employees.e = employee;
        var a = document.createElement('a');
        a.setAttribute('class','large-1 columns');
        a.setAttribute('id', 'aTag' + aTagCounter);;

        employees.aTagArray.push('aTag' + aTagCounter);

        weekDiv.appendChild(a);
        a.innerHTML = employees.e.toString();

    });
    clickedEmployee();
}

function clickedEmployee(aTagNumber) {
    $('#edit-monday1add').on('click', function(e) {

        $("a").click(function(event) {
            var clickedTag = event.target.id;
            addWorker(clickedTag);
        });
    });
    $('#edit-monday1remove').on('click', function(e) {

        $("a").click(function(event) {
            var clickedTag = event.target.id;
            removeWorker(clickedTag);
        });
    });
}
function addWorker(clickedTag) {
    $( "#" + clickedTag ).remove();
};

function removeWorker() {

};

window.onload = employed();