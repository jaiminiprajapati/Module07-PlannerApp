$(document).ready(function(){
    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

    // Generate timeblocks
    for (let i = 9; i <=17; i++){
        let row = $("<div>").addClass("row");
        let time = $("<div>")
            .addClass("col-1 hour")
            .text(dayjs().hour(i).format("h A"));
        let description = $("<textarea>").addClass("col-10 desctiption");
        let saveBtn = $("<button>")
            .addClass("col-1 saveBtn")
            .html('<span><i class="fas fa-save"></i></span>')
        
        
    }
});