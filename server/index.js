// const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from the Home Page");
});

app.get("/about", (req, res) => {
  return res.send(
    `Hey ${req.query.name}`
    // "Hello from the About Page " +
    //   " Hey " +
    //   req.query.name +
    //   " you are " +
    //   req.query.age
  );
});

app.listen(8000, () => console.log("Server Started!"));

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()} : ${req.method} ${req.url} : New Req Rec\n`;
//   const myUrl = url.parse(req.url, true);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("Home Page");
//         break;
//       case "/about":
//         const userName = myUrl.query.username;
//         res.end(`Hi, ${userName}`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for " + search);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup Form");
//         else if (req.method === "POST") {
//           // DB Query
//           res.end("Success");
//         }
//         break;
//       default:
//         res.end("404 Not Found");
//         break;
//     }
//   });
// }

// const myServer = http.createServer(app);
// const myServer = http.createServer(myHandler);

// myServer.listen(8000, () => console.log("Server Started!"));

// const myServer = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()} : ${req.method} ${req.url} : New Req Rec\n`;
//   const myUrl = url.parse(req.url, true);
//   // console.log(myUrl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     // switch (req.url) {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("Home Page");
//         // res.end("HomePage");
//         break;
//       case "/about":
//         const userName = myUrl.query.username;
//         res.end(`Hi, ${userName}`);
//         // res.end("i am user");
//         break;
//       case "/search": // this is the way google take search querry from the user and provide results in the backend
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for " + search);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup Form");
//         else if (req.method === "POST") {
//           // DB Query
//           res.end("Success");
//         }
//        break
//       default:
//         res.end("404 Not Found");
//         break;
//     }
//     // res.end("Data send!");
//   });
//   //   console.log("New Req Rec");
//   //   console.log(req.headers);
//   //   console.log(req);
//   //   res.end("Hello from the server");
//   //   console.log(res);
// });
