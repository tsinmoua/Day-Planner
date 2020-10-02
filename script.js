var date = $("#currentDay");

// Add current date to currentDay id
date.text(moment().format('LL'));

var currentTime = moment().format('HH');

// console.log("the current hour is: " + currentTime);

var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var thirteen = $("#thirteen");
var fourteen = $("#fourteen");
var fifteen = $("#fifteen");
var sixteen = $("#sixteen");
var seventeen = $("#seventeen");

// console.log(nine.attr("value"));

// 24 hour clock with the work day hours
var time = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];

// for loop to add classes to the time slots
for (let i = 0; i < time.length; i++) {
    if ((time[i].attr("value")) < parseInt(currentTime)) {
        time[i].addClass("past");
    } else if ((time[i].attr("value")) > parseInt(currentTime)) {
        time[i].addClass("future");
    } else {
        time[i].addClass("present");
    }
}

var saveNine = $(".saveNine");
var saveTen = $(".saveTen");
var saveEleven = $(".saveEleven");
var saveTwelve = $(".saveTwelve");
var saveThirteen = $(".saveThirteen");
var saveFourteen = $(".saveFourteen");
var saveFifteen = $(".saveFifteen");
var saveSixteen = $(".saveSixteen");
var saveSeventeen = $(".saveSeventeen");
var saveBtns = [saveNine, saveTen, saveEleven, saveTwelve, saveThirteen, saveFourteen, saveFifteen, saveSixteen, saveSeventeen];

var nineText = $(".nineText");
var tenText = $(".tenText");
var elevenText = $(".elevenText");
var twelveText = $(".twelveText");
var thirteenText = $(".thirteenText");
var fourteenText = $(".fourteenText");
var fifteenText = $(".fifteenText");
var sixteenText = $(".sixteenText");
var seventeenText = $(".seventeenText");
var textAreas = [nineText, tenText, elevenText, twelveText, thirteenText, fourteenText, fifteenText, sixteenText, seventeenText];

// Input items from local storage to correct timeslot to see items when refresh page
function getItems() {
for (let i = 0; i < textAreas.length; i++) {
    var input = JSON.parse(localStorage.getItem("task " + [i]));
    console.log(input);
    textAreas[i].text(input);
}
}

getItems();

// Each save button will only save its timeslot items
for (let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].on("click", function () {
        localStorage.setItem("task " + [i], JSON.stringify(textAreas[i].val()));
    })
}

// Clear local storage
$("#clear").on("click", function() {
    var question = confirm("Are you sure you want to clear the schedule?")
    if (question === true) {
        localStorage.clear();
        getItems();
    } else {
        return
    }
})
