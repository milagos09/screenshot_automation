Screenshot automation script

This script allows you to automatically take a screenshot of a specific element on a webpage. It uses the puppeteer library to automate the process of taking screenshots. It also uses the readline library to get the input from the user.
Installation and Setup

    Make sure you have Node.js installed on your machine. You can download it from here

    Clone or download the repository to your local machine.

    Open a terminal and navigate to the project directory

    Install the required dependencies by running the following command:

npm install puppeteer readline

Usage

    Open a terminal and navigate to the project directory

    Run the script by executing the following command:

node filename.js

    The script will prompt you to enter a URL and an element.

    For example, to take a screenshot of the table element of the Exchange Rate page of the Bangko Sentral ng Pilipinas, you would enter the following:

Enter URL: https://www.bsp.gov.ph/SitePages/Statistics/ExchangeRate.aspx
Enter element (e.g. #elementId, .className): table

    The script will take the screenshot of the table element of the URL provided and save it to the ./screenshots folder with the timestamp as the filename.

Note

    The script is set to take a screenshot of the visible area of the element, if you want to take a screenshot of the entire element, you can use the method .boundingBox() to get the dimensions of the element and pass them to the .screenshot() method.
    Make sure that you are running the script from the root directory of the project.
    You can customize the script as per your need, but make sure that you have the correct dependencies installed.

Additional Information

This script uses template literals for folder name and filename and it logs the process being done, like "Getting url and element from user...", "Launching browser...", "Navigating to url...", "Searching for element...", "Taking screenshot of the element...", "Closing browser...", "Screenshot saved to filename.png"

If you have any issues or questions, please open an issue on this repository.
