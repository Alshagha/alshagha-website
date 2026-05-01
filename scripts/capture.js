const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 4 });

        console.log("Navigating to HTML file...");
        const url = 'file://' + path.resolve(__dirname, '../public/post.html');
        await page.goto(url, { waitUntil: 'networkidle0' });

        console.log("Taking screenshot...");
        await page.screenshot({ path: path.resolve(__dirname, '../public/images/instagram_post.png') });

        await browser.close();
        console.log("Screenshot saved!");
    } catch (err) {
        console.error("Error generating image:", err);
    }
})();
