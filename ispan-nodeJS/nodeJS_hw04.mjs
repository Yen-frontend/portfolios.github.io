import { mkdirSync, readdirSync, existsSync, writeFileSync } from "node:fs";
import { writeFile } from "node:fs";

if (!existsSync("./zero")) {
    mkdirSync("./zero");
}

createHtml();

function createHtml() {
    for (let i = 1; i <= 20; i++) {
        const file = i < 10 ? `./zero/work0${i}.html` : `./zero/work${i}.html`;
        const content = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>這是第${i}個html檔案</h1>
            </body>
            </html>`;

        writeFileSync(file, content);
    }
}
