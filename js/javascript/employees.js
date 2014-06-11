/**
 * Created by erikmagnusson on 2014-06-10.
 */
var employees = {
    employeeArray : [],
    workingArraysArray : [],
    e : null,
    aTagArray : [],
    addWorkerToWeekDay : document.getElementById('edit-monday1add'),
    removeWorkerFromWeekDay : document.getElementById('edit-monday1remove'),
    removedFromAdd : null,
    removedFromRemove : null,
    clicked : null
}

function employed() {
    employees.employeeArray[0] = "Stefan Snyting" + '<hr>';
    employees.employeeArray[1] = "Mickis "+ '<hr>';
    employees.employeeArray[2] = "Alfonso Blomma"+ '<hr>';
    employees.employeeArray[3] = "Malin Cederlöf"+ '<hr>';
    employees.employeeArray[4] = "Teresia Lindgren"+ '<hr>';
    employees.employeeArray[5] = "Malin Falk"+ '<hr>';
    employees.employeeArray[6] = "Anna Norstedt"+ '<hr>';
    employees.employeeArray[7] = "Jenny Junkovic"+ '<hr>';
    employees.employeeArray[8] = "Lisbeth Castro"+ '<hr>';

    appendEmplyees();
}

function appendEmplyees() {
    var aTagCounter = 0;
    employees.employeeArray.forEach(function(employee) {
        aTagCounter++;
        employees.e = employee;
        var a = document.createElement('a');
        a.setAttribute('class','large-2 columns');
        a.setAttribute('id', 'aTag' + aTagCounter);;

        employees.aTagArray.push('aTag' + aTagCounter);

        employees.addWorkerToWeekDay.appendChild(a);
        a.innerHTML = employees.e.toString();
    });
    clickedEmployee();
}

function clickedEmployee() {
    $('#edit-monday1add').on('click', function(e) {


        employees.clicked = event.target.id;
        addWorker(employees.clicked);
        console.log('clicked1')

    });
    $('#edit-monday1remove').on('click', function(e) {


            employees.clicked = e.target.id;
            removeWorker(employees.clicked);
            console.log('clicked2')

    });
}
function addWorker(clicked) {
    employees.removedFromAdd = $( "#" + clicked ).remove();
    $( "#edit-monday1remove" ).append( employees.removedFromAdd );
};

function removeWorker(clicked) {
    employees.removedFromRemove = $( "#" + clicked ).remove();
    $( "#edit-monday1add" ).append( employees.removedFromRemove );


};

window.onload = employed();