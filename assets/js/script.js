// Global Variables
var currentHour = moment().hours();
var currentDate =
  moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');

// Function that makes an array with all the time blocks
function makeArr() {
  var arr = [];
  arr = $('textarea').map((j, element) => {
    return $(element);
  });
}

// Function that displays the current time by the second on the main header
setInterval(function () {
  var currentTime = moment();
  $('#currentDay').html(
    currentTime.format('YYYY MMMM DD') +
      ' ' +
      currentTime.format('dddd').substring(0, 3).toUpperCase()
  );
  $('#currentDay').html(
    currentDate + ' ' + currentTime.format('hh:mm:ss A')
  );
}, 100);

// Thia function sets the background accordingly to the time block
function setBackground() {
  $('.form-control').each(function () {
    var timeBlock = parseInt($(this).attr('id'));
    currentHour = parseInt(currentHour);
    if (currentHour > timeBlock) {
      $(this).addClass('past');
    } else if (currentHour < timeBlock) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });
}

// This is the functiont hat runs at the beginning of the app
$(function () {
  setBackground();
});
