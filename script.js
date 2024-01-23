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
        
        // color code each time block
        if (dayjs().hour() > i){
            description.addClass("past");
        } else if (dayjs().hour() === i){
            description.addClass("present");
        } else{
            description.addClass("future");
        }

        // Add the time block
        row.append(time, description, saveBtn);
        $(".container").append(row);

        // Save events in local storage on click of save button
        saveBtn.on("click", function(){
            var value = description.val();
            localStorage.setItem(i, value);
        });
    }
});