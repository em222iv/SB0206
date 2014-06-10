/**
 * Created by erikmagnusson on 2014-06-10.
 */
var months = {
    monthArray : [],
    currentMonth : 0,
    d : new Date(),
    n : 0,
    week : null
}
function months() {
}
function getMonthNumber(){
    months.n = months.d.getMonth();
    MonthsOfTheYear();
}
function MonthsOfTheYear() {
    months.monthArray[0] = "Januari";
    months.monthArray[1] = "Februari";
    months.monthArray[2] = "Mars";
    months.monthArray[3] = "April";
    months.monthArray[4] = "Maj";
    months.monthArray[5] = "Juni";
    months.monthArray[6] = "Juli";
    months.monthArray[7] = "Augusti";
    months.monthArray[8] = "September";
    months.monthArray[9] = "Oktober";
    months.monthArray[10] = "November";
    months.monthArray[11] = "December";
    returnMonth();
}
function returnMonth() {
    var week = months.monthArray[months.n];
    var monthDiv = document.getElementById("Month");

    monthDiv.innerHTML = week;
}


window.onload = getMonthNumber();
