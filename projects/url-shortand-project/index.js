const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connect");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");
// const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
const URL = require("./models/url");

const urlRoutes = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoutes = require("./routes/user");

const app = express();
const PORT = 8001;

//connect to mongodb
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

//Routes
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoutes);
// app.use("/url", restrictToLoggedinUserOnly, urlRoutes);
app.use("/user", userRoutes);
app.use("/", staticRoute);
// app.use("/", checkAuth, staticRoute);

// app.use("/test", async (req, res) => {
//   const allUrls = await URL.find({});
//   res.render("home", {
//     urls: allUrls,
//   });
//   res.end(`
//     <html>
//     <head></head>
//     <body>
//         <ol>
//         ${allUrls
//           .map(
//             (url) =>
//               `<li>${url.shortId}-${url.redirectUrl}-${url.visitHistory.length}</li>`
//           )
//           .join("")}
//         </ol>
//     </body>
//     </html>
//     `);
// });

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
