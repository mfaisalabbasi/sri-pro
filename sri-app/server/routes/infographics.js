const express = require('express');
const router = express.Router();
const multer = require('multer');
const Infographics = require('../database/models/Infographics');

//Post route private
//Uploading Feature Images
//posting infographics

const DIR = './public/Infographics/';
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
router.post('/', [upload.single('infographic')], async (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  const data = {
    Infographic: url + '/public/infographics/' + req.file.filename
  };
  try {
    const uploadinfo = new Infographics(data);
    res.status(200).json(uploadinfo);
    await uploadinfo.save();
  } catch (err) {
    console.log(err);
  }
});

//getting All infographics
//get method

router.get('/all', async (req, res) => {
  try {
    const infos = await Infographics.find().sort({
      $natural: -1
    });
    res.status(200).send(infos);
  } catch (err) {
    console.log(err);
  }
});

//getting latest 3
//get method
router.get('/latest', async (req, res) => {
  try {
    const infos = await Infographics.find()
      .limit(3)
      .sort({
        $natural: -1
      });
    res.status(200).send(infos);
    console.log(infos);
  } catch (err) {
    console.log(err);
  }
});

//Getting Single Infographics By ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const info = await Infographics.findById(id);
    res.status(200).json(info);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
