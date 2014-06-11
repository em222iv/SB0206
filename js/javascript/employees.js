/**
 * Created by erikmagnusson on 2014-06-10.
 */
var employees = {
    employeeArray : [],
    e : null,
    aTagArray : [],
    addWorkerToWeekDay : document.getElementById('edit-monday1add'),
    removeWorkerFromWeekDay : document.getElementById('edit-monday1remove'),
    removedFromAdd : null,
    removedFromRemove : null,
    clicked : null,
    panel : null,
    day : null,
    dd : null,
    activeDd : null
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
        a.setAttribute('class','large-2');
        a.setAttribute('id', 'aTag' + aTagCounter);;

        employees.aTagArray.push('aTag' + aTagCounter);

        employees.addWorkerToWeekDay.appendChild(a);
        a.innerHTML = employees.e.toString();
    });
    clickedEmployee();
}

function clickedEmployee() {
    $('#edit-monday1add').on('click', function(e) {
        console.log(e.target.id);
        var dive = "#edit-monday1add"
        if(e.target.id == "edit-monday1add"){
            //ingenting händer
        }else {
            employees.clicked = event.target.id;
            addWorker(employees.clicked);
        }
    });
    $('#edit-monday1remove').on('click', function(e) {
        if(e.target.id == "edit-monday1remove"){
            //ingenting händer
        }else {
            employees.clicked = e.target.id;
            Workers(employees.clicked);
        }
    });
}
function addWorker(clicked) {
    employees.removedFromAdd = $( "#" + clicked ).remove();
    $( "#edit-monday1remove" ).append( employees.removedFromAdd );
    checkActivePanel();
};

function Workers(clicked) {
    employees.removedFromRemove = $( "#" + clicked ).remove();
    $( "#edit-monday1add" ).append( employees.removedFromRemove );

};

function checkActivePanel() {
    var panelCounter = 0;
    for (var i = 0; i < 4; i++) {
        panelCounter++;
        employees.panel = $("#panel" + panelCounter)[ 0 ];
        if (employees.panel.getAttribute('class') === 'content active') {

            checkActiveDay();
            break;
        }
    }
}

function checkActiveDay() {

    employees.dd = $(".tabs").find(".active");


    //employees.korv = employees.day.getAttribute('class') === 'active';

    /* var dayCounter = 0;
     var emp = employees.panel.getAttribute('id');

     for (var i = 0; i < 6; i++) {
         dayCounter++;

         employees.day = $("#" + emp + '-' + dayCounter)[ 0 ];
         console.log(employees.day);

         if (employees.day.getAttribute('class') === 'active') {
             console.log('fucking SUCCESS');
         }
     }*/

}



window.onload = employed();