$(document).ready(function(){
  console.log("schedule app");
});
// date will be displayed in the ex: January 10, 2023 11:59pm
var now = dayjs().format(' dddd MM/DD/YYYY h:mm a')
var currentDate = document.getElementById("currentDay");
currentDate.innerHTML = now


$(".time-div").each(function(){
  var timeDiv = $(this).attr("id").split("-")[1];

  if (hourNow == timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");

  } else if (hourNow < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");

  } else if (hourNow > timeDiv) {
    $(this).removeClass("future")
    $(this).addClass("past");
  }
});



$(".saveBtn").click(function(event){
  event.preventDefault();
  var value = $(this).siblings(".time-blocck").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
});

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
$("#hour-18 .time-block").val(localStorage.getItem("18"));
$("#hour-19 .time-block").val(localStorage.getItem("19"));
