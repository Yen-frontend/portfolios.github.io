import {writeFile} from "fs";


for(let i = 1 ; i<=20 ; i++){
const file = `./work${i}.html`;
const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>這是第${i} 個 HTML 檔</title>
</head>
<body>
    <h1>這是第${i} 個 HTML 檔</h1>
</body>
</html>`;
writeFile(file, content, error => {
    if(error){
        console.log("寫入失敗")
    return;
    }
    console.log("寫入成功");
});
}

