/**
 * Created by erikmagnusson on 2014-06-12.
 */
var workingArrays = {
    monthArray: [],
    week1Array: [],
    week2Array: [],
    week3Array: [],
    week4Array: [],
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day12: [],
    day22: [],
    day32: [],
    day42: [],
    day52: [],
    day62: [],
    day13: [],
    day23: [],
    day33: [],
    day43: [],
    day53: [],
    day63: [],
    day14: [],
    day24: [],
    day34: [],
    day44: [],
    day54: [],
    day64: []

}
function pushToMonthArray() {

    $('#finishedButton1').on('click', function(){
        workingArrays.monthArray[0] = workingArrays.week1Array;
        workingArrays.monthArray[1] = workingArrays.week2Array;
        workingArrays.monthArray[2] = workingArrays.week3Array;
        workingArrays.monthArray[3] = workingArrays.week4Array;


        localStorage["savedArray"] = JSON.stringify(workingArrays.monthArray);

        JSON.parse(localStorage["savedArray"]);



    });

}
window.onload = pushToMonthArray();
