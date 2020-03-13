# workdayscheduler
Work Day Scheduler - Working with APIs

## Project Description

Work Day Scheduler is a simple hourly planner for a 9am to 5pm work day. For convenience, it uses persistent local storage to store a personal schedule from one browser session to the next. 

Because local storage is not secure (not safe from prying eyes), entering sensitive data such as passwords (in local storage) is not advised.

### How to Use Work Day Scheduler

For each hour of the day you are planning, enter descriptive text, e.g. "Meet with client". If you want that hour's text to appear after you close the browser application (or tab), click the floppy disk icon at the right end of the descriptive text, for the current hour.

### Projects Links
Anyone can use this calendar at:

https://github.com/shininglite/workdayscheduler

Anyone can see the source code at:

https://shininglite.github.io/workdayscheduler/

### Future Improvements

To JavaScript code comments:

Add a descriptive comment to analyze the syntax of the several lines of code that look like this:

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

### Contributors
University of Minnesota Coding Boot Camp and Tom van Deusen
