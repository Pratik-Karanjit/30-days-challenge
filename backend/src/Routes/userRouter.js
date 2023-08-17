import { Router } from "express";
import { checkPassword, createUser, loginUser, myProfile, readAllUser, updateMyProfile, verifyEmail } from "../controller/userController.js";
import isAuthenticatedForEmail from "../middleware/isAuthenticatedForEmail.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
export let userRouter = Router()

// userRouter.route("/home") .post((req, res) => {
//     res.json("post response done successfully.");
//   })
//   .get((req, res) => {
//     res.json("Response successfully received from get request.");
//   })
//   .patch((req, res) => {
//     res.json("patch response done successfully.");
//   })
//   .delete((req, res) => {
//     res.json("delete response done successfully.");
//   });



  // userRouter.route("/about") .post((req, res) => {
  //   res.json("post response done successfully.");
  // })
  // .get((req, res) => {
  //   res.json("get response done successfully.");
  // })
  // .patch((req, res) => {
  //   res.json("patch response done successfully.");
  // })
  // .delete((req, res) => {
  //   res.json("delete response done successfully.");
  // });
  userRouter.route('/create').post(createUser).get(readAllUser);

userRouter.route("/verify-email").post(isAuthenticatedForEmail,verifyEmail);

  userRouter.route('/create').post(createUser).get(readAllUser);

  userRouter.route("/login").post(loginUser);

userRouter.route("/my-profile").get(isAuthenticated,myProfile);

userRouter.route("/update-my-profile").patch(isAuthenticated, updateMyProfile);

userRouter.route("/update-password").patch(isAuthenticatedForEmail, checkPassword);





  // userRouter.route('/api/admins').get(pagination)

