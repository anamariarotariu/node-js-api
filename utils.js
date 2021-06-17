//fs helps us with managing files, we write in questions.js what we add using postman
const fs = require('fs');
//function for writing in json file when we make a put request
function writeDataToFile(filename, content){
    fs.writeFileSync(filename, JSON.stringify(content), 'utf-8',(err) =>{
if(err){
    console.log(err);
}
    })
   
}
//function for getting the data from json file when we make a post request
function getPostData(req){
    return new Promise((resolve, reject) =>{
 try{
            let body= '';
            req.on('data', (chunk) =>{
                body+=chunk.toString();
            })
            req.on('end', ()=>{
                resolve(body);
            })
        }catch(error){
            console.log(error);
        }
    });
       
    
}
 module.exports ={
        writeDataToFile,
        getPostData

    }