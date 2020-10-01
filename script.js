var headerEl = $(".display-3");
var pEl = $(".lead");
var date = $("#currentDay");
var timeBlock = $(".time-block");

// Add current date to currentDay id
date.text(moment().format('LL'));

var currentTime = moment().format('HH');

console.log("the current hour is: " + currentTime);

var nine = $("#nine");
var ten = $("#ten");
var eleven = $("#eleven");
var twelve = $("#twelve");
var thirteen = $("#thirteen");
var fourteen = $("#fourteen");
var fifteen = $("#fifteen");
var sixteen = $("#sixteen");
var seventeen = $("#seventeen");

console.log(nine.attr("value"));
console.log(ten.attr("value"));
console.log(eleven.attr("value"));
console.log(twelve.attr("value"));
console.log(thirteen.attr("value"));
console.log(fourteen.attr("value"));
console.log(fifteen.attr("value"));
console.log(sixteen.attr("value"));
console.log(seventeen.attr("value"));

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

var appt;

var saveBtn = $(".saveBtn");

var nineAM = $(".nineAM");


saveBtn.on("click",function(){
    localStorage.setItem("task", JSON.stringify(nineAM.val()));
    console.log(JSON.stringify(nineAM.val()));
});

var input = JSON.parse(localStorage.getItem("task"));

console.log(nineAM.text(input));

function saved() {
    nineAM.text(input)
}

