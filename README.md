# Schedule Application

# Table of Contents
 - Description
 - Installation Instructions
 - GitHub Account
 - Contacts
 - Images
 - Code Snippets
 - Resources
 - Credits

# Description
This project was to create a scheduler to help with your day to day activites. By breaking it down hour by hour we created a color code to help make it more readable, grey for hours that have passed, blue for the present hour and green for the upcoming hours. We attached a saved button to save all of your events.

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

# Images


# Code Snippets
 $(".input").each(function(){
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);

    if (currentTime > scheduledTime) {
      $(this).removeClass("present future");
      $(this).addClass("past");

    } else if (currentTime < scheduledTime) {
      $(this).removeClass("present past");
      $(this).addClass("future");

    } else {
      $(this).removeClass("future past");
      $(this).addClass("present");
    }
    colorBlock();
  });
}


# Resources
- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/
- Book: Javascipt 6th edition by Mike McGrath

# Credits
Alexis S. - My tutor for the week, huge help on pseduocoding, and going over topics
Paul - My brother-in-law
