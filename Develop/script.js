
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  //displays the current day //
  var now = dayjs().format('MM/DD/YYYY')
  $('#currentDay').text(now)

  // created a variable selecting the id and splitting it so we can isolate the number // 
  var hour = $('#hour-9').attr('id').split('-')[1]
  var currentHour = dayjs().hour()

  var txtHour = $('#hour-9')

  if (hour < currentHour) {
    txtHour.addClass('past')
    txtHour.removeClass('present future')

  } else if (hour === currentHour) {
    txtHour.removeClass('past future')
    txtHour.addClass('present')

  } else {
    txtHour.addClass('future')
    txtHour.removeClass('past present')
  }


});
