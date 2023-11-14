import express, { response } from "express";
import { Book } from "../models/bookModel.js";
import exp from "constants";
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("WElcome to mern stack project");
});

router.route("/books").post(async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: `send all required fields`,
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}).get(async (req,res)=>{
    try {
        const books=await Book.find({})
        return res.status(200).json(books);
    } catch (error) {
        
    }
})

export default router;
