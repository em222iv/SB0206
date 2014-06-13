/**
 * Created by erikmagnusson on 2014-06-10.
 */
var employees = {
    employeeArray : [],
    aTagArray : [],
    addWorkerToWeekDay : document.getElementById('edit-monday1add'),
    removeWorkerFromWeekDay : document.getElementById('edit-monday1remove'),
    currentEmployee : null,
    e : null,
    removedFromAdd : null,
    removedFromRemove : null,
    clicked : null,
    panel : null,
    day : null,
    dd : null,
    activeATag : null,
    activeHrefValue : null,
    week1arraybool1 : false,
    week1arraybool2: false,
    week1arraybool3 : false,
    week1arraybool4: false,
    week2arraybool1 : false,
    week2arraybool2 : false,
    week2arraybool3 : false,
    week2arraybool4 : false,
    week3arraybool1 : false,
    week3arraybool2: false,
    week3arraybool3 : false,
    week3arraybool4 : false,
    week4arraybool1 : false,
    week4arraybool2 : false,
    week4arraybool3 : false,
    week4arraybool4 : false,
    week5arraybool1 : false,
    week5arraybool2 : false,
    week5arraybool3 : false,
    week5arraybool4 : false,
    week6arraybool1 : false,
    week6arraybool2 : false,
    week6arraybool3 : false,
    week6arraybool4 : false
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
        if(e.target.id == "edit-monday1add"){
            //ingenting händer
        }else {
            employees.currentEmployee = e.target.innerHTML;
            employees.clicked = e.target.id;
            addWorker(employees.clicked);
        }
    });
    $('#edit-monday1remove').on('click', function(e) {
        if(e.target.id == "edit-monday1remove"){
            //ingenting händer
        }else {
            employees.currentEmployee = e.target.innerHTML;
            employees.clicked = e.target.id;
            Workers(employees.clicked);
        }
    });
}
function addWorker(clicked) {
    employees.removedFromAdd = $( "#" + clicked ).remove();
    $( "#edit-monday1remove" ).append( employees.removedFromAdd );
    checkActiveDay();
    addWorkerToArray();

};
function Workers(clicked) {
    employees.removedFromRemove = $( "#" + clicked ).remove();
    $( "#edit-monday1add" ).append( employees.removedFromRemove );

};
function checkActiveDay() {
    employees.dd = $(".tabs").find(".active");
    employees.activeATag = $( employees.dd ).children();
    employees.activeHrefValue = $( employees.activeATag ).attr('href');

}

function addWorkerToArray() {
    var addWorkerToArrayCounter = 0;
    for (var i = 0; i < 4; i++) {
        addWorkerToArrayCounter++;
        //panel = #panel++
        employees.panel = $("#panel" + addWorkerToArrayCounter)[ 0 ];
        //om #panel++ har class content active
        if (employees.panel.getAttribute('class') === 'content active') {
            console.log(employees.panel);
            //hrefvalue har class active. stämmer href#panel överens med caset

            //måndag
            if (employees.activeHrefValue === '#panel' + addWorkerToArrayCounter + '-1') {
                for (var x = 0; x < 4; x++) {
                    switch (employees.panel.getAttribute('id') == 'panel' + x) {

                        //veckor
                        case true:
                            workingArrays.day1.push(employees.currentEmployee);

                            if(employees.week1arraybool1 === true){
                                break;
                            }else {
                                workingArrays.week1Array[0] = (workingArrays.day1);
                                employees.week1arraybool1 = true;
                            }
                            break;
                        case true:

                            workingArrays.day12.push(employees.currentEmployee)
                            if(employees.week2arraybool1 === true){break;
                            }else {
                                workingArrays.week2Array.push(workingArrays.day12);
                                employees.week2arraybool1 = true;
                            }
                            break;
                        case true:

                            workingArrays.day13.push(employees.currentEmployee)
                            if(employees.week3arraybool1 === true){break;}
                            else {
                                workingArrays.week3Array.push(workingArrays.day13);
                                employees.week3arraybool1 = true;
                            }
                            break;
                        case true:

                            workingArrays.day14.push(employees.currentEmployee)

                            if(employees.week4arraybool1 === true){break;
                            }else {
                                workingArrays.week4Array.push(workingArrays.day14);
                                employees.week4arraybool1 = true;
                            }
                            break;
                    }
                }
            }
            //tisdag
            if (employees.activeHrefValue === '#panel' + addWorkerToArrayCounter + '-2') {

                for (var x = 0; x < 4; x++) {


                    switch (employees.panel.getAttribute('id') == 'panel' + x) {
                        //veckor
                        case true:
                            console.log(employees.week1arraybool2);
                            workingArrays.day2.push(employees.currentEmployee);

                            if(employees.week1arraybool2 === true){
                                console.log('d');break;
                            }else {
                                //in här
                                console.log('dd');
                                workingArrays.week1Array[1] = (workingArrays.day2);
                                employees.week1arraybool2 = true;
                            }
                            break;
                        case true:

                            workingArrays.day22.push(employees.currentEmployee)
                            if(employees.week2arraybool2 === true){break;
                            }else {
                                workingArrays.week2Array.push(workingArrays.day22);
                                employees.week2arraybool2 = true;
                            }
                            break;
                        case true:

                            workingArrays.day23.push(employees.currentEmployee);
                            if(employees.week3arrayboo2l === true){break;
                            }else {
                                workingArrays.week3Array.push(workingArrays.day23);
                                employees.week3arraybool2 = true;
                            }
                            break
                        case true:

                            workingArrays.day24.push(employees.currentEmployee);
                            if(employees.week4arraybool2 === true){break;
                            }else {
                                workingArrays.week4Array.push(workingArrays.day24);
                                employees.week4arraybool2 = true;
                            }
                            break

                    }
                }
            }
            //onsdag
            if (employees.activeHrefValue === '#panel' + addWorkerToArrayCounter + '-3') {

                for (var x = 0; x < 4; x++) {


                    switch (employees.panel.getAttribute('id') == 'panel' + x) {

                        case true:

                            workingArrays.day3.push(employees.currentEmployee);
                            if(employees.week1arraybool3 === true){;break;
                            }else {
                                workingArrays.week1Array[2] = (workingArrays.day3);
                                employees.week1arraybool3 = true;
                            }
                            break;
                        case true:
                            workingArrays.day32.push(employees.currentEmployee);
                            if(employees.week2arraybool3 === true){;break;
                            }else {
                                workingArrays.week2Array.push(workingArrays.day32);
                                employees.week2arraybool3 = true;
                            }
                            break;
                        case true:
                            workingArrays.day33.push(employees.currentEmployee)
                            if(employees.week3arraybool3 === true){;break;
                            }else {
                                workingArrays.week3Array.push(workingArrays.day33);
                                employees.week3arraybool3 = true;
                            }
                            break
                        case true:
                            workingArrays.day34.push(employees.currentEmployee);
                            if(employees.week4arraybool3 === true){;break;
                            }else {
                                workingArrays.week4Array.push(workingArrays.day34);
                                employees.week4arraybool3 = true;
                            }
                            break
                    }
                }
            }
            //torsdag
            if (employees.activeHrefValue === '#panel' + addWorkerToArrayCounter + '-4') {
                for (var x = 0; x < 4; x++) {

                    switch (employees.panel.getAttribute('id') == 'panel' + x) {

                        case true:

                            workingArrays.day4.push(employees.currentEmployee);
                            if(employees.week1arraybool1 === true){;break;
                            }else {
                                workingArrays.week1Array.push(workingArrays.day4);
                                employees.week1arraybool1 = true;
                            }
                            break;
                        case true:

                            workingArrays.day42.push(employees.currentEmployee);
                            if(employees.week2arraybool2 === true){;break;
                            }else {
                                workingArrays.week2Array.push(workingArrays.day42);
                                employees.week2arraybool2 = true;
                            }
                            break;
                        case true:
                            workingArrays.day43.push(employees.currentEmployee);
                            if(employees.week3arraybool3 === true){;break;
                            }else {
                                workingArrays.week3Array.push(workingArrays.day43);
                                employees.week3arraybool3 = true;
                            }
                            break
                        case true:
                            workingArrays.day44.push(employees.currentEmployee);
                            if(employees.week4arraybool4 === true){;break;
                            }else {
                                workingArrays.week4Array.push(workingArrays.day44);
                                employees.week4arraybool4 = true;
                            }
                            break

                    }
                }
            }
            //fredag
            if (employees.activeHrefValue === '#panel' + addWorkerToArrayCounter + '-5') {
                for (var x = 0; x < 4; x++) {

                    switch (employees.panel.getAttribute('id') == 'panel' + x) {

                        case true:

                            workingArrays.day5.push(employees.currentEmployee);
                            if(employees.week5arraybool1 === true){;break;
                            }else {
                                workingArrays.week1Array.push(workingArrays.day5);
                                employees.week5arraybool1 = true;
                            }
                            break;
                        case true:
                            workingArrays.day52.push(employees.currentEmployee);
                            if(employees.week5arraybool2 === true){;break;
                            }else {
                                workingArrays.week2Array.push(workingArrays.day52);
                                employees.week5arraybool2 = true;
                            }
                            break;
                        case true:
                            workingArrays.day53.push(employees.currentEmployee);
                            if(employees.week5arraybool3 === true){;break;
                            }else {
                                workingArrays.week3Array.push(workingArrays.day53);
                                employees.week5arraybool3 = true;
                            }
                            break
                        case true:
                            workingArrays.day54.push(employees.currentEmployee);
                            if(employees.week4arraybool4 === true){;break;
                            }else {
                                workingArrays.week4Array.push(workingArrays.day54);
                                employees.week4arraybool4 = true;
                            }
                            break

                    }
                }
            }
            //lördag
            if (employees.activeHrefValue === '#panel' + addWorkerToArrayCounter + '-6') {
                for (var x = 0; x < 4; x++) {

                    switch (employees.panel.getAttribute('id') == 'panel' + x) {

                        case true:

                            workingArrays.day6.push(employees.currentEmployee);
                            if(employees.week6arraybool1 === true){;break;
                            }else {
                                workingArrays.week1Array.push(workingArrays.day6);
                                employees.week6arraybool1 = true;
                            }
                            break;
                        case true:

                            workingArrays.day62.push(employees.currentEmployee);
                            if(employees.week6arraybool2 === true){;break;
                            }else {
                                workingArrays.week2Array.push(workingArrays.day62);
                                employees.week6arraybool2 = true;
                            }
                            break;
                        case true:

                            workingArrays.day63.push(employees.currentEmployee);
                            if(employees.week6arraybool3 === true){;break;
                            }else {
                                workingArrays.week3Array.push(workingArrays.day63);
                                employees.week6arraybool3 = true;
                            }
                            break
                        case true:

                            workingArrays.day64.push(employees.currentEmployee);
                            if(employees.week6arraybool4 === true){;break;
                            }else {
                                workingArrays.week4Array.push(workingArrays.day64);
                                employees.week6arraybool4 = true;
                            }
                            break

                    }
                }
            }
        }
    }
}

window.onload = employed();