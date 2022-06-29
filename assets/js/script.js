var hourEvent;

//Display current date
$("#currentDay").text(moment().format("MMMM Do YYYY"));


//save event to local storage
var saveHourEvent = function (){
  var saveText = $(this).siblings(".description").val();
    var saveHour = $(this).siblings(".hour").text();
   localStorage.setItem(saveHour, saveText)
}
var getHourEvent = function(){
  var textEvent = localStorage.getItem("9AM")
$("#hour-text-9").val(textEvent);
localStorage.getItem("10AM")
$("#hour-text-10").val()

}
getHourEvent();
$(".saveBtn").on("click", saveHourEvent)
