const fs = require("fs")

let data='Hello world!'

// fs.writeFile('message.txt',data,(error)=>{
//     if(error)throw `This is the error:${error}`
//     console.log('Operation successfull')
    
// })

fs.readFile('message.txt','utf8',(error,data)=>{
    if(error)throw `This is the error:${error}`
    console.log('The data:',data)
})