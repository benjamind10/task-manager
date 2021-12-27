var currentHour = moment().hours();

// Shorthand for $( document ).ready()
var currentDate =
  moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');

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

$(function () {
  setBackground();
});
