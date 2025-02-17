const fs=require('fs')
const data="I am the newest data"
const write=()=>{
    fs.writeFile('./mydir/data.txt',data,(err)=>{
        if(err)
            console.error(err);
        else
        console.log("File updated successfully");
        })
}
write();

//erasing the content of the file of data.txt
// const eraseData = () => {
//     fs.writeFile('./data.txt', "", (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("File erased successfully");
//       }
//     });
//   };
  
//   eraseData();
  
