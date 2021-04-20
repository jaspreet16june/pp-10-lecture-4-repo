// Input from the users
let fs=require('fs');
let input = process.argv.slice(2);
console.log(input);

//now check whether it is file or option::::
let option=[];
let filePath=[];
for(let i=0;i<input.length;i++){
    if(input[i]=="-s" || input[i] == "-n" || input[i] =="-b"){
        option.push(input[i]);
    }else{
        filePath.push(input[i]);
    }
}
//console.log("option", option);
//console.log("filePath",filePath);

//  

for(let i=0;i<filePath.length;i++){
    let fileExists=fs.existsSync(filePath[i]);
    if(fileExists==false){
      //  console.log(filePath[i], "does not exist");
    }
}
//read the content of the file::::::
let totalContent="";
for(let i =0;i<filePath.length;i++){
    let readContent= fs.readFileSync(filePath[i],"utf-8");
    totalContent+=readContent + "\n";
    //console.log(totalContent);

}
//now to implement option -s::::::
let isSOption=option.includes("-s");
if(isSOption==true){
    let contentArr=totalContent.split("\r\n");
  //  console.log(contentArr);
//remove empty spaces::
let tempArr=[];
for(let i=0;i < contentArr.length;i++){
    if(contentArr[i] !== ""){
        tempArr.push(contentArr[i]);
    }
}
totalContent=tempArr.join("\n")
console.log(totalContent);
}

// //now implement option -n:::::
// let isNoption=option.includes("-n");
// if(isNoption==true){
//     let val=1;
//     let contentArr=totalContent.split("\r\n");
//     for(let i=0;i<contentArr.length;i++){
//         contentArr[i] = val + "." + contentArr[i];
//         val++;
//     }
//     totalContent =contentArr.join("\r\n");
// }
// //console.log(totalContent);

// //now implement option -b:::
// let isboption=option.includes("-b");
// if(isboption==true){
//     let contentArr=totalContent.split("\r\n");
//     console.log(contentArr);
//     let count=1;
//     for(let i=0;i<contentArr.length;i++){
//         if(contentArr !==''){
//             contentArr[i]=count+ "." +contentArr[i];
//             count++;
//         }
//     }
//     totalContent=contentArr.join("\n");
//     console.log(totalContent)
// }