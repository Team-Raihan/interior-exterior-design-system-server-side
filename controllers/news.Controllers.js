const asyncHandler = require("express-async-handler");
const News = require("../models/news.Model");

//@description     Add News
//@route           POST /api/news/
//@access          Private
const addNews = asyncHandler(async (req, res) => {
  const { title, img, news, date } = req.body;

  if (!title || !img || !news) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const newNews = await News.create({
    title,
    img,
    news,
    date,
  });

  if (newNews) {
    res.status(201).json({
      _id: newNews._id,
      img: newNews.img,
      name: newNews.name,
      occupation: newNews.occupation,
      review: newNews.review,
    });
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!");
  }
});

//@description     Get all News
//@route           GET /api/news/
//@access          Public
const getAllNews = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await News.find(query)).reverse();
  res.send(result);
});

//@description     Get a news by id
//@route           GET /api/news/:id
//@access          Public
const getNewsByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await News.findOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//@description     Get News by date filtering
//@route           GET /api/news/filter/:date
//@access          Public
const getNewsByDate = asyncHandler(async (req, res) => {
  try {
    const date = req.params.date;
    const query = { date: date };
    const result = await News.find(query);
    if (result.length > 0) {
      res.status(200).send(result);
    } else {
      res.status(200).send({
        error: "Your Selected Data Have No Task",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@description     Delete News
//@route           DELETE /api/news/:id
//@access          Private
const deleteNewsByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await News.deleteOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {
  addNews,
  getAllNews,
  getNewsByID,
  deleteNewsByID,
  getNewsByDate,
};
