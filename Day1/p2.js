const fs=require('fs');
//readFileSync is synchronous in nature hence it is blocking in nature
const data =fs.readFileSync("./data.txt","utf-8");
console.log("I am before reading")
console.log(data)
