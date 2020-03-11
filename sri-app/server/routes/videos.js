const express = require('express');
const router = express.Router();
const Videos = require('../database/models/Videos');

router.post('/', async (req, res) => {
  const { video } = req.body;
  const data = {
    video: video
  };
  console.log(data);
  try {
    const postVideo = new Videos(data);
    res.status(200).json(postVideo);
    await postVideo.save();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
