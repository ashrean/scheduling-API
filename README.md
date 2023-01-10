# Schedule Application

# Table of Contents
 - Description
 - Installation Instructions
 - GitHub Account
 - Contacts
 - Code Snippets
 - Resources
 - Credits

# Description
This project was to create a daily schedule to help keep track of your day-to-day activities. To keep this app more organized we broke it down by hour and added color blocks to visualize your day.  For reference grey means the hour has passed, blue for the current hour, and green for the upcoming hours.

# Installtion Instructions
1. Open the terminal (make sure it's not coded into a directory)
2. Type ls to see all of your files stored on your computer
3. Type cd into a directory of your choice from there you have two options
    - Create a new directory by using the command mkdir FILENAME
    - Type cd into an existing one
4. Once you have selected a directory of your choice you may git clone the repository.
5. Type ls to make sure it is there
6. Type cd to enter the selected directory
7. Type code . (make sure to add space between the code and the period) and VS Code will automatically open it up for you.

# Github Account
URl -> https://github.com/ashrean/codequiz-webAPI

Deployed Link ->  https://ashrean.github.io/scheduling-API/

# Contacts
Email -> sese.ashrean@gmail.com

Linkedin -> https://www.linkedin.com/in/ashleyrean/


# Code Snippets
$(".time-div").each(function(){
  var timeDiv = $(this).attr("id").split("-")[1];

  if (hourNow == timeDiv) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");

  } else if (hourNow < timeDiv) {
    $(this).removeClass("present");
    $(this).addClass("future");

  } else if (hourNow > timeDiv) {
    $(this).removeClass("future")
    $(this).addClass("past");
  }
});


# Resources
- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/
- Book: Javascipt 6th edition by Mike McGrath

# Credits
- Alexis S. - My tutor for the week, huge help on pseduocoding, and going over topics
- Paul - My brother-in-law
