var hourEvent = document.querySelector(".hour");

//Display current date
$("#currentDay").text(moment().format("MMMM Do YYYY"));


//save event to local storage
var saveHourEvent = function (){
  var saveText = $(this).siblings(".description").val();
    var saveHour = $(this).siblings(".hour").text();
   localStorage.setItem(saveHour, saveText)
}
//get items from local storage
$("#hour-text-9").val(localStorage.getItem("9AM"));
$("#hour-text-10").val(localStorage.getItem("10AM"));
$("#hour-text-11").val(localStorage.getItem("11AM"));
$("#hour-text-12").val(localStorage.getItem("12PM"));
$("#hour-text-1").val(localStorage.getItem("1PM"));
$("#hour-text-2").val(localStorage.getItem("2PM"));
$("#hour-text-3").val(localStorage.getItem("3PM"));
$("#hour-text-4").val(localStorage.getItem("4PM"));
$("#hour-text-5").val(localStorage.getItem("5PM"));

var timeOfDay = function(){

}
$(".saveBtn").on("click", saveHourEvent)

