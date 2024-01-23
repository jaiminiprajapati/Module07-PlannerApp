$(document).ready(function(){
    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

    // Generate timeblocks
    for (let i = 9; i <=17; i++){
        let row = $("<div>");
        let time = $("<div>");
        let description = $("<textarea>");
        let saveBtn = $("<button>");
    }
});