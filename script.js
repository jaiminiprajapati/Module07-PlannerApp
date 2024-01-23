$(document).ready(function(){
    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("MMMM D, YYYY"));
});