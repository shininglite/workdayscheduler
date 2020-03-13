// jQuery document ready function waits until the entire page loads,
// and only then does it run the JavaScript code
$(document).ready(function () {

  // jQuery notation to listen for Save button class clicks
  // when any button that has a class of saveBtn is clicked
  // an anonymous function, following this line of code, will run
  $(".saveBtn").on("click", function () {

    // assign the text that has been entered for the current
    // time slot to a variable called value
    // the siblings of items in .saveBtn class are the other Save Buttons
    // so value is assigned the text (class description) in the textarea of the current row
    var value = $(this).siblings(".description").val();
    console.log(value);//only displays in console when a save button is clicked

    // store current hour (e.g. hour-11 for 11am) in var 'time'
    var time = $(this).parent().attr("id");
    // console.log(time);//displays "hour-'number of parent hour'"

    // save, in localStorage, (in the browser) the hour and description of item
    // specifically, in Google Inspect, choose Application, 
    // Local Storage, File to view the key/value pairs
    // for the Save buttons that were clicked and thus saved in Local Storage 
    localStorage.setItem(time, value);
    console.log(time, value);
  });

  //declare an anonymous function named hourUpdater
  function hourUpdater() {
    // get current number of hours
    // create currentHour variable and assign the current hour to it
    var currentHour = moment().hours();
    //console.log(currentHour);//logs the actual local current hour, in 24 hour format

    // loop over time blocks
    // jQuery .each iterates over the DOM elements
    // that are part of the jQuery object
    // in this case, the DOM elements that are of class .timeblock    
    $(".time-block").each(function () {
      // create a variable blockHour and assign it the value
      // parseInt, parses the current id (all of .time=block class) and
      // uses the hyphen as the character that separates the elements
      // and assigns the 1st (not 0th) element to blockHour variable

      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(parseInt($(this).attr("id").split("-")[1]));
      console.log("Looky here");

      // check if we've moved past this time
      // checking each time-block we are in
      // check whether current hour on the clock is past current hour in the block
      // the CSS styles change the background color when class
      // is past, present, or future

      if (blockHour < currentHour) {
        $(this).addClass("past");
      // console.log ($(this).addClass("past"));
      // console.log('Past', blockHour, currentHour);
      
      }
      
      // check if current hour is same hour as block
      // where text is being saved
      // if so add a class of .present to that block
      // and remove .past if it exists
      
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        console.log('Present', blockHour, currentHour);
      
      }
      
      // check if current block hour is in the future
      // if so add a class of .future to that block
      // and remove .past and .present classes, if they exist

      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log('Future', blockHour, currentHour);
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated

  // pass an argument of 15 seconds to hourUpdater function
  // so the hourUpdater function will check current hour
  // against blockHour every fifteen seconds
  // Assign that method to a variable named interval

  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  // use jQuery method to get from local storage the 
  // text that was previously in each hourly slot
  // to its correct location

  // TODO: break down this syntax, piece by piece
  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // jQuery method    
  // Display current day on page (moment.js or jQueryUI?)
  // at the location of the id currentDay paragraph tag, insert 
  // day name in locale set (dddd)
  // month name in locale set (MMMM)
  // day of month, with ordinal (do)
  // for example Thursday, March 12th, the 'th' makes it an ordinal
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // console.log("I did it");
  // console.log(moment().format("dddd, MMMM Do"));
});
