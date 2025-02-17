const fs=require('fs');
// const append=()=>{
//     fs.appendFile('data.txt','Hello World!',(err)=>{
//         if(err)console.log(err);
//         });
// }
// append();
const append=()=>{
    const data="This is new data.\n";
    fs.appendFile('data.txt',data,(err)=>{
        if(err) throw(err);
        console.log("data appended!");
    })
}
append();