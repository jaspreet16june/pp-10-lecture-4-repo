let fs = require("fs");

// Taking input frm user
let input = process.argv.slice(2);

// making two arrays (options for -s,-b,-n),(filePath for txt files)
let options = [];
let filePath = [];

//in this loop am pushing the user input to a matching array(options or filepath)
for (let i = 0; i < input.length; i++) {
    if (input[i] == "-s" || input[i] == "-b" || input[i] == "-n") {
        options.push(input[i]);
    } else {
        filePath.push(input[i]);
    }
}

// console.log(options);
// console.log(filePath);

// in this checking that the file exist or not
for (let i = 0; i < filePath.length; i++) {
    let isExist = fs.existsSync(filePath[i]);
    if (isExist == false) {
        console.log("filePath", filePath[i], "Does not exist");
        return;
    }
}

//reading the file and print in the console (all the files provided in input)
let totalContent = [];
//totalContent is a array having whole file content init 
for (let i = 0; i < filePath.length; i++) {
    let readContent = fs.readFileSync(filePath[i], "utf-8");
    totalContent += readContent + "\r\n";
}
// console.log(totalContent);


//checking for the option if option is -s or not
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


//checking between -n and -b 
//these are ,utually exclusive so first will run 
//in line 58 to 76 we are checking which option is coming first
let isN = options.includes("-n");
let isB = options.includes("-b");

let finalOption;

//if conditions for options -n and -b
if(isN==true){
    if(isB==true){

        let idxB = options.indexOf("-b");
        let idxN = options.indexOf("-n");
        finalOption = idxB<idxN? "-b" : "-n";

    }else{
        finalOption = "-n"
    }
}else if(isB==true){
    finalOption = "-b";
}


//this code will work if option is -n
if (finalOption == "-n") {
    let count = 1;
    let contentArr = totalContent.split("\r\n");
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = count + ". " + contentArr[i];
        count++;
    }
    totalContent = contentArr.join("\r\n");
    // console.log(contentArr);
}

//this code will work if option is -b
if (finalOption=="-b") {
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

//printing the whole content
console.log(totalContent);