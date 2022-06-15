# README-Fill-In-the-Blank-Generator

## Description:
The files found with this README file come together to create a README generator. Some code was given.

## index.js
In the index.js file, I did multiple things. I:

- Imported inquirer, fs, and generateMarkdown.js
- Input questions into the questions array
- Wrote the code within the init function
    - Used inquirer.prompt to gather information from the user to make the README personalized to their needs
    - Created a file name based on their project's name and called the writeToFile function
- Wrote the code within the writeToFile function
    - Used fs.writeFile() to create a file with the contents being the returned string from the generateMarkdown function

## generateMarkdown.js
In the generateMarkdown.js file, I did multiple things. I:

- Wrote the code within all functions
    - For the helper functions, I used 'if else statements' to read which license the user chose and then return the specific information for the that license (whether the badge, link, or notice for the section).
    - In the generateMarkdown function, I created the format I wanted the end README to have and used the results of the user input to add in the content. Additionally, I called the helper functions within this function so that I could get the specific information for the license chosen by the user.


## Link to walkthrough video of application:
Here is the link to the walkthrough video of application:

<a href="https://watch.screencastify.com/v/YSqXtfzvDIa6tB1RBDT9">https://watch.screencastify.com/v/YSqXtfzvDIa6tB1RBDT9</a>

The file named "number-generator.md" is the example README file created in this video.