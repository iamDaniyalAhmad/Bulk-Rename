const fs = require("fs");
const preview = false;
const replace = "harry"
const rep = "join"
try {
    fs.readdir("data",(err,data)=>{
        for(let i=0;i<data.length;i++){
            const item = data[i];
            let newFile = "data/" + item.replaceAll(replace,rep)
            if(!preview){
                fs.rename("data/"+item,newFile,()=>{
                    console.log("Renamed Successfully");
                })
            }
            else{
                if("data/"+item !== newFile){
                    console.log("data/"+item+"will be renamed to ", newFile);
                }
            }

        }
    })
    
} catch (error) {
    console.log(err);
    
}