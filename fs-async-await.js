const fs = require('fs');

function createDir(){
    return new Promise((resolve , reject)=>{
        fs.mkdir("./output", {recursive : true} , (err)=>{
            if(err){
                reject(err);
                return ;
            }
            resolve("dir is created ");
        });
    });
}

function createFile(filename){
    return new Promise((resolve , reject)=>{
        fs.writeFile("./output/" +filename +".txt" , "this is file "+filename+".txt" , (err)=>{
            if(err){
                reject(err);
                return ;
            }
            resolve(filename + " is created");
        } );
    });
}

function unlinkFile(){
    
}