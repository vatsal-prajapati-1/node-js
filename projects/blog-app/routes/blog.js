const { Router } = require("express");

const multer = require("multer");

const path = require("path");

const {
  handleNewAddBlog,
  handleUserCoverImage,
  handleGetUserById,
  handleCommentOfUsers,
} = require("../controllers/blog");

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

router.get("/add-new", handleNewAddBlog);

router.get("/:id", handleGetUserById);

router.post("/comment/:blogId", handleCommentOfUsers);

router.post("/", upload.single("coverImage"), handleUserCoverImage);

module.exports = router;
