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
        fs.writeFile("./output/file" +filename +".txt" , "this is file "+filename+".txt" , (err)=>{
            if(err){
                reject(err);
                return ;
            }
            resolve(`file${filename}.txt`);
        } );
    });
}

function unlinkFile(filename){
    return new Promise((resolve , reject)=>{
        fs.unlink("./output/" + filename , (err)=>{
            if(err){
                reject(err);
                return ;
            }
            resolve(filename);
        });
    });
}

function unlinkDir(filename){
    return new Promise((resolve , reject)=>{
        fs.rm(filename , {recursive : true} , (err)=>{
            if(err){
                reject(err);
                return ;
            }
            resolve(filename  +" is deleted");
        });
    });
}

createDir().then(()=>{
    let promises = [];
    for(let y=1 ; y<=10 ; y++){
        promises.push(createFile(y));
    }
    return Promise.all(promises);
})
.then((res)=>{
    let promises = []; 
    res.forEach((val)=>{
        promises.push(unlinkFile(val));
    });
    return Promise.all(promises);
})
.then((res)=>{
    console.log(res.join(",") + " all deleted");
    return unlinkDir("./output");
})
.then(console.log)
.catch(console.log);