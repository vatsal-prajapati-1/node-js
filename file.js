// const fs = require("fs");

// const os = require("os");

// console.log(os.cpus().length);

// Sync.....
// fs.writeFileSync("./test.txt", "Hello World!");

//Async.....
// fs.writeFile("./test.txt", "Hey There!", (err) => {});

//Sync......
// console.log(fs.readFileSync("./read.txt", "utf8"));
// const result = fs.readFileSync("./read.txt", "utf8");
// console.log(result);

//Async....
// fs.readFile("./read.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

//append
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `${Date.now()} Hello mr users\n`);

//copy file
// fs.cpSync("./test.txt", "./copy.txt");

//delete
// fs.unlinkSync("./copy.txt");

//statistics of file
// const stat = fs.statSync("./test.txt");
// console.log(stat.isFile());

//create mkdir directory or folder
// fs.mkdirSync("my-docs/a/b", { recursive: true });

//delete mkdir directory or folder
// fs.rmdirSync("my-docs/a/b")
// fs.rmdirSync("my-docs/a")
// fs.rmdirSync("my-docs");
