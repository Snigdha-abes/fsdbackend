const fs=require('fs');
fs.rmdir('mydir',(err)=>{
    if(err)console.log(err);
    else
    console.log('Directory deleted');

})