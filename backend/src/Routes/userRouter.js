import { Router } from "express";
export let userRouter = Router()

userRouter.route("/home") .post((req, res) => {
    res.json("post response done successfully.");
  })
  .get((req, res) => {
    res.json("Response successfully received from get request.");
  })
  .patch((req, res) => {
    res.json("patch response done successfully.");
  })
  .delete((req, res) => {
    res.json("delete response done successfully.");
  });



  userRouter.route("/about") .post((req, res) => {
    res.json("post response done successfully.");
  })
  .get((req, res) => {
    res.json("get response done successfully.");
  })
  .patch((req, res) => {
    res.json("patch response done successfully.");
  })
  .delete((req, res) => {
    res.json("delete response done successfully.");
  });