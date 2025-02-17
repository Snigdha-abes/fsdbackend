const fs=require('fs');
//readfile is async hence it is non-blocking in nature
const read=()=>{
    fs.readFile('./data.txt','utf-8',(err,data)=>{
        if(err)
            console.error(err);
        else
        console.log(data);
        })
}
console.log("I am before reading")
read();
console.log("I am after reading")