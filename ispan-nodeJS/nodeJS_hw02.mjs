import {rename, renameSync} from "node:fs";

for (let i = 1; i <= 20; i++) {
if(!process.argv[2]){
    rename(`./work${i}.html`, `./work/work${i}.html`, error => {
        if (error){
            console.log(error);
            console.log("操作失敗");
            return;
        }
        console.log("操作成功");
    })
}else{
    renameSync(`./work/work${i}.html`,`./work${i}.html`);
}
}
