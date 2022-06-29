var hourEvent = document.querySelector(".description");
var currentTime = moment().hour();

//Display current date
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));


//save event to local storage
var saveHourEvent = function () {
  var saveText = $(this).siblings(".description").val();
  var saveHour = $(this).siblings(".hour").text();
  localStorage.setItem(saveHour, saveText)
}
//get items from local storage
$("#hour-text-9").val(localStorage.getItem("9AM"));
$("#hour-text-10").val(localStorage.getItem("10AM"));
$("#hour-text-11").val(localStorage.getItem("11AM"));
$("#hour-text-12").val(localStorage.getItem("12PM"));
$("#hour-text-13").val(localStorage.getItem("1PM"));
$("#hour-text-14").val(localStorage.getItem("2PM"));
$("#hour-text-15").val(localStorage.getItem("3PM"));
$("#hour-text-16").val(localStorage.getItem("4PM"));
$("#hour-text-17").val(localStorage.getItem("5PM"));

var timeOfDay = function () {
  //set hour for corresponding text area
  hourNine = moment().hour(12).format('H');
  hourTen = moment().hour(12).format('H');
  hourEleven = moment().hour(12).format('H');
  hourTwelve = moment().hour(12).format('H');
  hourThirteen = moment().hour(13).format('H');
  hourFourteen = moment().hour(14).format('H');
  hourFifteen = moment().hour(15).format('H');
  hourSixteen = moment().hour(15).format('H');
  hourSeventeen = moment().hour(17).format('H');
  //set background color depending on hour of day
  if (hourNine == currentTime) {
    $("#hour-text-9").removeClass("past");
    $("#hour-text-9").addClass("present");
  }
  if (hourNine > currentTime) {
    $("#hour-text-9").addClass("future");
  }
  if (hourTen == currentTime) {
    $("#hour-text-10").removeClass("past");
    $("#hour-text-10").addClass("present");
  }
  if (hourTen > currentTime) {
    $("#hour-text-10").addClass("future");
  }
  if (hourEleven == currentTime) {
    $("#hour-text-11").removeClass("past");
    $("#hour-text-11").addClass("present");
  }
  if (hourEleven > currentTime) {
    $("#hour-text-11").addClass("future");
  }
  if (hourTwelve == currentTime) {
    $("#hour-text-12").removeClass("past");
    $("#hour-text-12").addClass("present");
  }
  if (hourTwelve > currentTime) {
    $("#hour-text-12").addClass("future");
  }
  if (hourThirteen == currentTime) {
    $("#hour-text-13").removeClass("past");
    $("#hour-text-13").addClass("present");
  }
  if (hourThirteen > currentTime) {
    $("#hour-text-13").removeClass("past");
    $("#hour-text-13").addClass("future");
  }
  if (hourFourteen == currentTime) {
    $("#hour-text-14").removeClass("past");
    $("#hour-text-14").addClass("present");
  }
  if (hourFourteen > currentTime) {
    $("#hour-text-14").addClass("future");
  }
  if (hourFifteen == currentTime) {
    $("#hour-text-15").removeClass("past");
    $("#hour-text-15").addClass("present");
  }
  if (hourFifteen > currentTime) {
    $("#hour-text-15").addClass("future");
  }
  if (hourSixteen == currentTime) {
    $("#hour-text-16").removeClass("past");
    $("#hour-text-16").addClass("present");
  }
  if (hourSixteen > currentTime) {
    $("#hour-text-16").addClass("future");
  }
  if (hourSeventeen == currentTime) {
    $("#hour-text-17").removeClass("past");
    $("#hour-text-17").addClass("present");
  }
  if (hourSeventeen > currentTime) {
    $("#hour-text-17").addClass("future");
  }
};
timeOfDay();


$(".saveBtn").on("click", saveHourEvent)

