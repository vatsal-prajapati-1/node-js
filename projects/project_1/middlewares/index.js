const fs = require("fs");

const logReqRes = (fileName) => {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      //   "log.txt",
      `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
};

module.exports = {
  logReqRes,
};

// middleware - plugin;
// app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     fs.appendFile(
//       "log.txt",
//       `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
//       (err, data) => {
//         next();
//       }
//     );
// console.log("hello from the middleware");
// req.userName = "xyz.com";
// return res.json({ msg: "Hello from the middleware" });
//   });

// app.use((req, res, next) => {
//   console.log("hello from the middleware2 ", req.userName);
//   next();
// });
