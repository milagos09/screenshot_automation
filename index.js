const puppeteer = require("puppeteer");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getUrlAndElement = async () => {
    return new Promise((resolve) => {
        rl.question("Enter URL: ", (url) => {
            rl.question("Enter element (e.g. #elementId, .className): ", (element) => {
                resolve({ url, element });
                rl.close();
            });
        });
    });
};

(async () => {
    console.log("Getting url and element from user...");
    const { url, element } = await getUrlAndElement();

    console.log("Launching browser...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    console.log(`Searching for element ${element}...`);
    const el = await page.$(element);
    console.log("Taking screenshot of the element...");

    const screenshotFolder = "./screenshots/";
    const screenshotPath = `${screenshotFolder}${Date.now()}.png`;
    await el.screenshot({ path: screenshotPath });

    console.log(`Screenshot saved to ${screenshotPath}`);
    console.log("Closing browser...");
    await browser.close();
})();
