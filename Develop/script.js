// Creating Date, time using moment()
var m = moment();
// date will be displayed in the ex: January 10, 2023 11:59pm
$("#currentDay").text(moment().format("LLLL"))

$(document).ready(function(){
  colorBlock();
  renderText();
});

function colorBlock(){
  var currentTime = moment().hours();
  console.log("Current Time" + currentTime);

  // comparing the current time to the time block and checking
  // if its in the past, present, future
  $(".input").each(function(){
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);

    if (currentTime > scheduledTime) {
      $(this).removeClass("present future");
      $(this).addClass("past");

    } else if (currentTime < scheduledTime) {
      $(this).removeClass("present past");
      $(this).addClass("future");

    } else {
      $(this).removeClass("future past");
      $(this).addClass("present");
    }
  });
}

// Functionality of the button
var eventTime;
var eventText;


$(".saveBtn").click(function(){
  eventText = $(this).siblings(".input").val();
  console.log(eventText);

  eventTime = $(this).siblings(".hour").text();
  console.log(eventTime);
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorBlock();
  renderText();
});

$(".deleteBtn").click(function(){
  eventText = $(this).siblings(".input").val("");
  eventText = $(this).siblings(".input").val();
  eventTime = $(this).siblings(".hour").text();
  localStorage.setItem(eventTime, JSON.stringify(eventText));

  colorBlock();
  renderText();
});

// Diplay and entering events for each hour
function renderText(){
  var savedEvent9 = JSON.parse(localStorage.getItem("9:00 am"));
  $("#9").val("");
  $("#9").val(savedEvent9);

  var savedEvent10 = JSON.parse(localStorage.getItem("10:00 am"));
  $("#10").val("");
  $("#10").val(savedEvent10);

  var savedEvent11 = JSON.parse(localStorage.getItem("11:00 am"));
  $("#11").val("");
  $("#11").val(savedEvent11);

  var savedEvent12 = JSON.parse(localStorage.getItem("12:00 pm"));
  $("#12").val("");
  $("#12").val(savedEvent12);

  var savedEvent1 = JSON.parse(localStorage.getItem("1:00 pm"));
  $("#1").val("");
  $("#1").val(savedEvent1);

  var savedEvent2 = JSON.parse(localStorage.getItem("2:00 pm"));
  $("12").val("");
  $("#2").val(savedEvent2);

  var savedEvent3 = JSON.parse(localStorage.getItem("3 pm"));
  $("#3").val("");
  $("#3").val(savedEvent3);

  var savedEvent4 = JSON.parse(localStorage.getItem("4:00 pm"));
  $("4").val("");
  $("4").val(savedEvent4);

  var savedEvent5 = JSON.parse(localStorage.getItem("5 pm"));
  $("#5").val("");
  $("#5").val(savedEvent5);

  var savedEvent6 = JSON.parse(localStorage.getItem("6 pm"));
  $("#6").val("");
  $("#6").val(savedEvent6);

  var savedEvent7 = JSON.parse(localStorage.getItem("7 pm"));
  $("#7").val("");
  $("#7").val(savedEvent17);

};
