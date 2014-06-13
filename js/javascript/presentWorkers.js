/**
 * Created by erikmagnusson on 2014-06-13.
 */
var presentWorkers = {
    workers : 0,
    dd : null,
    activeTag : null,
    activeHrefValue : null,
    hrefMatch : null,
    checker : null

}

function getArray(){
    var storedNames = JSON.parse(localStorage["savedArray"]);
    var firstWeek = storedNames[0];
    var secondWeek = storedNames[1];
    var thirdWeek = storedNames[2];
    var fourthtWeek = storedNames[3];



    $(document).on('click', 'a', function () {
        //helt jävla otrligthny
        console.log(this.href.substr(40));
    });

    //hämtar dd elementet med active class
    presentWorkers.dd = $(".tabs").find(".active");
    //hämtar dd elementets barn
    presentWorkers.activeATag = $( presentWorkers.dd ).children();
    //hämtar barnet href id
    presentWorkers.activeHrefValue = $( presentWorkers.activeATag ).attr('href');

    //checker =
    presentWorkers.checker = presentWorkers.activeHrefValue.toString();
    presentWorkers.hrefMatch = $("a[href$='"+presentWorkers.checker+"']");


    clickMatchingElements()
}

function clickMatchingElements(){

    $(presentWorkers.hrefMatch).on('click', function(e){
        console.log(e.target)
        presentWorkers.activeHrefValue = $( presentWorkers.activeATag ).attr('href');

        presentWorkers.hrefMatch = $("a[href$='"+presentWorkers.checker+"']");
    });
}



window.onload = getArray();