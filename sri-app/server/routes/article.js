const express = require('express');
const router = express.Router();
const Article = require('../database/models/Article');
const { check, validationResult } = require('express-validator');
const multer = require('multer');

const DIR = './public/ArticleImages/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname + '-' + Date.now();
    cb(null, fileName);
  }
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

router.post(
  '/',
  [
    upload.single('image'),
    [
      check('title', 'Enter post heading')
        .not()
        .isEmpty(),
      check('description', 'Enter Article Descritpion')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { title, description } = req.body;
    const url = req.protocol + '://' + req.get('host');

    const data = {
      title,
      description,
      image: url + '/ArticleImages/' + req.file.filename
    };

    try {
      const postArticle = new Article(data);
      res.status(200).json(postArticle);
      await postArticle.save();
    } catch (error) {
      console.error(error);
    }
  }
);

//getting three latests posts
//get method
router.get('/latest', async (req, res) => {
  const posts = await Article.find()
    .limit(4)
    .sort({ $natural: -1 });
  res.send(posts);
});

//Get
//getting post by id
//fetching single post
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const single = await Article.findById(id);
    res.status(200).json(single);
  } catch (err) {
    console.log(err);
  }
});

//Get
//getting single Latest post
//fetching single post
router.get('/posts/single', async (req, res) => {
  try {
    const single = await Article.findOne().sort({ $natural: -1 });
    res.status(200).json(single);
  } catch (err) {
    console.log(err);
  }
});

//get All posts
//method Get
router.get('/', async (req, res) => {
  try {
    const allPosts = await Article.find();
    res.status(200).json(allPosts);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
