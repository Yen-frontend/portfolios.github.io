import {rename, readdirSync, renameSync} from "node:fs";
const getFile = readdirSync("./work");
for(let i = 1; i <= getFile.length;i++){
	const oldPath = `./work/work${i}.html`;
	if(i < 10){
		renameSync(oldPath, `./work/work00${i}.html`);
	}else{
		renameSync(oldPath, `./work/work0${i}.html`);
	}
}