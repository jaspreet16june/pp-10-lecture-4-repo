let fs = require('fs');
let input=process.argv.slice(2);
console.log("input", input);
let options = [];
let filePaths = [];
for(let i = 0; i<input.length;i++){
    if(input[i]=="-s" || input[i]=="-b" || input[i]=="-n"){
        options.push(input[i]);
    }
    else{
        filePaths.push(input[i]);
    }
}
//console.log("options", options);
//console.log("filePath", filePaths);
for(let i=0;i<filePaths.length;i++){
    let isFilePresent=fs.existsSync(filePaths[i]);
    if(isFilePresent==false){
        console.log("filePath",filePaths[i], "does not exists");
        return;
    }
}
let totalContent=" ";
for(let i=0;i<filePaths.length;i++){
    let contentOfCurrent=fs.readFileSync(filePaths[i],"utf-8");
    totalContent+=contentOfCurrent+ "\r\n";
    //console.log(totalContent);
}
let isSoption=options.includes("-s");
 if(isSoption==true){
    let contentArr=totalContent.split("\r\n");
    console.log(contentArr);
    //remove
    let tempArr=[];
    for(let i=0; i< contentArr.length;i++){
        if(contentArr[i] !==" "){
            tempArr.push(contentArr[i]);
        }
    }
    totalContent=tempArr.join("\n");
    console.log(totalContent);
}


let isN=options.includes("-n");
if(isN == true){

    let count =1;
    let contentArr=totalContent.split("\r\n");
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=count+"."+contentArr[i];
        count++;
    }
    totalContent=contentArr.join("\r\n");
    console.log(totalContent);
}