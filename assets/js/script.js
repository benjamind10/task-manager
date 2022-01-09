// Global Variables
var currentHour = moment().hours();
var currentDate =
  moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
var uInput;
var indexId;

// This is the function hat runs at the beginning of the app
$(function () {
  startDay(makeArr());
  setBackground();
  saveBtn();
  clearDay();
});

// This block displays the current time by the second on the main header
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

// Function that makes an array with all the time blocks
function makeArr() {
  var arr = [];
  arr = $('textarea').map((i, element) => {
    return $(element);
  });
  return arr;
}

// This method will populate the time blocks with what is in local storage
function startDay(arr) {
  arr.each(function (i) {
    arr[i] = JSON.parse(localStorage.getItem(i));
    this.val(arr[i]);
    this.css('color', 'black');
  });
}

// This function controls the button and saves the text to local storage
function saveBtn() {
  $('.saveBtn').on('click', function () {
    userInput = $(this).siblings('.form-control').val().trim();
    indexId = $(this).attr('data-id');
    localStorage.setItem(indexId, JSON.stringify(userInput));
  });
}

// This function sets the background accordingly to the time block
function setBackground() {
  $('.form-control').each(function () {
    var timeBlock = parseInt($(this).attr('id'));
    currentHour = parseInt(currentHour);

    if (currentHour > timeBlock) $(this).addClass('past');
    else if (currentHour < timeBlock) $(this).addClass('future');
    else $(this).addClass('present');
  });
}

// Function to clear the localstorage and have an empty page.
function clearDay() {
  $('#clearDay').on('click', function () {
    localStorage.clear();
    startDay(makeArr());
  });
}
