const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

// Routes
// Server Side Render With Response HTML
// router.get("/users", async (req, res) => {
//   const allDbUsers = await User.find({});
//   const html = `
//       <ul>
//           ${allDbUsers
//             .map((user) => `<li>${user.firstName} - ${user.email} </li>`)
//             .join("")}
//             </ul>
//             `;
//   // ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//   res.send(html);
// });

// REST API
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);
// router.get("/", handleGetAllUsers);
// router.get("/api/users", async (req, res) => {
// router.get("/", async (req, res) => {
//   const allDbUsers = await User.find({});
// res.setHeader("X-MyName", "sonu"); //Custom Header
// Always add x to custom headers
// console.log(req.headers);
// console.log("I am in get route", req.userName);
//   return res.json(allDbUsers);
// });

router
  //   .route("/api/users/:id")
  .route("/:id")
  .get(handleGetUserById)
  //   .get(async (req, res) => {
  // const user = await User.findById(req.params.id);
  // return res.json({ status: "Success" });
  // const id = Number(req.params.id);
  // const user = users.find((user) => user.id === id);
  // if (!user) return res.status(404).json({ error: "user not found" });
  // return res.json(user);
  //   })
  .patch(handleUpdateUserById)
  //   .patch(async (req, res) => {
  // await User.findByIdAndUpdate(req.params.id, { lastName: "changed" });
  // return res.json({ status: "Success" });

  // const id = Number(req.params.id);
  // const user = users.find((user) => user.id === id);
  // user.first_name = "sonu";
  // user.last_name = "maru";
  // user.email = "sonu@gmail.com";
  // user.job_title = "BCA";
  // if (!user) return res.status(200).json({ status: "Success" });
  // return res.json(user);
  //   })
  .delete(handleDeleteUserById);
//   .delete(async (req, res) => {
// await User.findByIdAndDelete(req.params.id);
// return res.json({ status: "Success" });
// const id = Number(req.params.id);
// const user = users.find((user) => user.id === id);
// delete user.first_name;
// if (!user) return res.status(200).json({ status: "Success" });
// return res.json(user);
//   });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// router.post("/", handleCreateNewUser);
// router.post("/api/users", async (req, res) => {
// router.post("/", async (req, res) => {
//   const body = req.body;
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json({ msg: "All fields are req..." });
//   }

//   const result = await User.create({
//     firstName: body.first_name,
//     lastName: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     jobTitle: body.job_title,
//   });

// console.log(result);

//   return res.status(201).json({ msg: "success" });

// users.push({ id: users.length + 1, ...body });
// fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//   return res.status(201).json({ status: "Success", id: users.length });
// });
// console.log(body);
// });

// app.patch("/api/users/:id", (req, res) => {
//   // Edit the user with id
//   return req.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // Delete the user with id
//   return req.json({ status: "pending" });
// });

module.exports = router;
