let fs = require("fs");

let input = process.argv.slice(2);

let options = [];
let filePath = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);
    } else {
        filePath.push(input[i]);
    }
}

// console.log(options);
// console.log(filePath);

for (let i = 0; i < filePath.length; i++) {
    let isExist = fs.existsSync(filePath[i]);
    if (isExist == false) {
        console.log("filePath", filePath[i], "Does not exist");
        return;
    }
}

let totalContent = [];
for (let i = 0; i < filePath.length; i++) {
    let readContent = fs.readFileSync(filePath[i], "utf-8");
    totalContent += readContent + "\r\n";
}
// console.log(totalContent);

let isOption = options.includes("-s");
if (isOption == true) {
    let contentArr = totalContent.split("\r\n");
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== '') {
            tempArr.push(contentArr[i]);
        }
    }
    totalContent = tempArr.join("\r\n");
    // console.log(tempArr)
}

let isN = options.includes("-n");
if (isN == true) {
    let count = 1;
    let contentArr = totalContent.split("\r\n");
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = count + ". " + contentArr[i];
        count++;
    }
    totalContent = contentArr.join("\r\n");
    // console.log(contentArr);
}
isN = options.includes("-n");
let isB = options.includes("-b");
let finalOption;
if(isN == true){
    if(isB == true){
        let indxB = options.indexOf("-b");
        let indxN = options.indexOf("-n");
        finalOption=indxB<indxN ? "-b" : "-n";
    }
    else{
        finalOption="-n";
    }
}else if(isB==true){
    finalOption = "-b";
}

 isB = options.includes("-b");
if (isB == true) {
    let contentArr = totalContent.split("\r\n");
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] !== '') {
            contentArr[i] = count + ". " + contentArr[i];
            count++;
        }
    }
    totalContent = contentArr.join("\r\n");
}
console.log(totalContent);
